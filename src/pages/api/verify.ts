import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs';

// Configure to not parse the request body automatically
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Parse the form data - update for new formidable API
    const options = {
      keepExtensions: true,
    };
    
    console.log("Parsing form data...");
    const formData = await new Promise((resolve, reject) => {
      const form = formidable(options);
      form.parse(req, (err, fields, files) => {
        if (err) {
          console.error("Form parsing error:", err);
          return reject(err);
        }
        console.log("Fields received:", fields);
        console.log("Files received:", files);
        return resolve({ fields, files });
      });
    });
    
    const { fields, files } = formData;

    // Process based on content type - handle array format from formidable v4+
    const contentTypeField = fields.contentType;
    const contentType = Array.isArray(contentTypeField) ? contentTypeField[0] : contentTypeField;
    
    if (!contentType) {
      console.error("Missing content type in request");
      return res.status(400).json({ error: 'Missing content type' });
    }
    
    console.log(`Processing content type: ${contentType}`);
    let verificationResult;

    if (contentType === 'text') {
      const textContentField = fields.textContent;
      const textContent = Array.isArray(textContentField) ? textContentField[0] : textContentField;
      
      if (!textContent) {
        console.error("Missing text content for text verification");
        return res.status(400).json({ error: 'Missing text content' });
      }
      verificationResult = await verifyTextContent(textContent);
    } 
    else if (contentType === 'url') {
      const urlField = fields.url;
      const url = Array.isArray(urlField) ? urlField[0] : urlField;
      
      if (!url) {
        console.error("Missing URL for URL verification");
        return res.status(400).json({ error: 'Missing URL' });
      }
      verificationResult = await verifyUrl(url);
    } 
    else if (contentType === 'file') {
      const fileField = files.file;
      const file = Array.isArray(fileField) ? fileField[0] : fileField;
      
      if (!file) {
        console.error("Missing file for file verification");
        return res.status(400).json({ error: 'No file uploaded' });
      }
      verificationResult = await verifyFile(file);
    } 
    else {
      console.error(`Invalid content type: ${contentType}`);
      return res.status(400).json({ error: 'Invalid content type' });
    }

    // Return result
    return res.status(200).json(verificationResult);
  } catch (error) {
    console.error('Error processing verification request:', error);
    return res.status(500).json({ error: 'Error processing verification request' });
  }
}

// Text verification function
async function verifyTextContent(text) {
  // Analyze the text for truthfulness

  // Keywords check for demonstration purposes
  // In a real-world implementation, you would use NLP or ML models
  const misleadingKeywords = [
    'fake', 'hoax', 'conspiracy', 'debunked', 'clickbait', 
    'shocking truth', 'they don\'t want you to know', 'mainstream media won\'t tell you',
    'secret', 'hidden', 'cover-up', 'truth revealed'
  ]; 
  const credibleKeywords = [
    'research', 'study', 'evidence', 'proven', 'verified', 'source',
    'published', 'peer-reviewed', 'expert', 'data shows', 'statistics',
    'analysis', 'according to experts', 'scientific', 'journal'
  ];
  const neutralKeywords = [
    'reportedly', 'allegedly', 'claimed', 'according to', 'seemingly',
    'possibly', 'potentially', 'suggests', 'may indicate', 'could be'
  ];
  
  // Convert text to lowercase for case-insensitive comparison
  const lowerText = text.toString().toLowerCase();
  
  // Count occurrences of keywords
  const misleadingCount = misleadingKeywords.reduce((count, keyword) => 
    count + (lowerText.includes(keyword) ? 1 : 0), 0);
  
  const credibleCount = credibleKeywords.reduce((count, keyword) => 
    count + (lowerText.includes(keyword) ? 1 : 0), 0);
  
  const neutralCount = neutralKeywords.reduce((count, keyword) => 
    count + (lowerText.includes(keyword) ? 1 : 0), 0);
  
  // Text analysis metrics
  const textLength = text.toString().length;
  const hasAdequateLength = textLength > 100;
  
  // Check for exaggerated language (excessive punctuation)
  const exclamationCount = (text.toString().match(/!/g) || []).length;
  const questionCount = (text.toString().match(/\?/g) || []).length;
  const excessivePunctuation = (exclamationCount + questionCount) > text.toString().length / 50;
  
  // Check for ALL CAPS sections (often used in sensational content)
  const capsRegex = /[A-Z]{5,}/g;
  const capsMatches = text.toString().match(capsRegex) || [];
  const hasExcessiveCaps = capsMatches.length > 0;
  
  // Check for balanced presentation (looking for "but", "however", etc.)
  const balancingTerms = ["however", "but", "on the other hand", "conversely", "nevertheless"];
  const balancingTermCount = balancingTerms.reduce((count, term) => 
    count + (lowerText.includes(term) ? 1 : 0), 0);
  const hasPerspectiveBalance = balancingTermCount > 0;
  
  // Calculate confidence score (in a real app, this would use ML/AI)
  let confidenceScore = 0.5; // Start at neutral
  
  // Adjust based on keyword presence
  confidenceScore += credibleCount * 0.08;
  confidenceScore -= misleadingCount * 0.12;
  confidenceScore -= neutralCount * 0.03;
  
  // Adjust for text structure features
  if (!hasAdequateLength) {
    confidenceScore -= 0.1;
  }
  if (excessivePunctuation) {
    confidenceScore -= 0.07;
  }
  if (hasExcessiveCaps) {
    confidenceScore -= 0.08;
  }
  if (hasPerspectiveBalance) {
    confidenceScore += 0.09;
  }
  
  // Cap the score between 0 and 1
  confidenceScore = Math.max(0, Math.min(1, confidenceScore));
  
  // Generate assessment based on score and detected patterns
  let assessment = "";
  let details = [];
  
  // Create analysis details based on what we detected
  let analysisDetails = [];
  
  if (credibleCount > 0) {
    analysisDetails.push({ 
      point: `References credible information sources (${credibleCount} references)`,
      confidence: 0.7 + (credibleCount * 0.05)
    });
  }
  
  if (misleadingCount > 0) {
    analysisDetails.push({ 
      point: `Contains potential misinformation indicators (${misleadingCount} detected)`, 
      confidence: 0.7
    });
  }
  
  if (!hasAdequateLength) {
    analysisDetails.push({ 
      point: "Text is too short to provide adequate context", 
      confidence: 0.85
    });
  }
  
  if (excessivePunctuation) {
    analysisDetails.push({ 
      point: "Uses sensational punctuation patterns often found in misleading content", 
      confidence: 0.75
    });
  }
  
  if (hasExcessiveCaps) {
    analysisDetails.push({ 
      point: "Contains excessive capitalization, often used for exaggeration", 
      confidence: 0.8
    });
  }
  
  if (hasPerspectiveBalance) {
    analysisDetails.push({ 
      point: "Presents multiple perspectives, indicating balanced reporting", 
      confidence: 0.85
    });
  }
  
  if (neutralCount > 2) {
    analysisDetails.push({ 
      point: "Uses cautious language, avoiding absolute claims", 
      confidence: 0.7
    });
  }
  
  // Set the high-level assessment based on confidence score
  if (confidenceScore >= 0.8) {
    assessment = "This content appears to be highly factual and reliable";
    
    // Select the most relevant details or use our analysis details
    details = analysisDetails.length >= 3 ? 
      analysisDetails.slice(0, 3) : 
      [
        { point: "Contains credible information and context", confidence: confidenceScore },
        { point: "Uses precise language and factual statements", confidence: confidenceScore + 0.05 },
        { point: "No significant indicators of misinformation detected", confidence: confidenceScore + 0.1 }
      ];
      
  } else if (confidenceScore >= 0.6) {
    assessment = "This content appears to be mostly factual with some uncertainties";
    
    // Select the most relevant details or use our analysis details
    details = analysisDetails.length >= 3 ? 
      analysisDetails.slice(0, 3) : 
      [
        { point: "Contains generally reliable information", confidence: confidenceScore },
        { point: "Some claims may require additional verification", confidence: confidenceScore - 0.1 },
        { point: "Presents a relatively balanced perspective", confidence: confidenceScore + 0.05 }
      ];
      
  } else if (confidenceScore >= 0.4) {
    assessment = "This content contains a mix of factual and questionable information";
    
    // Select the most relevant details or use our analysis details
    details = analysisDetails.length >= 3 ? 
      analysisDetails.slice(0, 3) : 
      [
        { point: "Some claims appear to be accurate", confidence: confidenceScore + 0.1 },
        { point: "Contains potentially misleading statements", confidence: confidenceScore - 0.1 },
        { point: "Additional context and verification recommended", confidence: confidenceScore - 0.05 }
      ];
      
  } else {
    assessment = "This content contains potentially misleading or inaccurate information";
    
    // Select the most relevant details or use our analysis details
    details = analysisDetails.length >= 3 ? 
      analysisDetails.slice(0, 3) : 
      [
        { point: "Contains language often associated with misinformation", confidence: 0.7 },
        { point: "Makes claims without adequate supporting evidence", confidence: 0.8 },
        { point: "Significant fact-checking is recommended", confidence: 0.9 }
      ];
  }
  
  // Calculate overall confidence and cap between 0-1
  details.forEach(detail => {
    detail.confidence = Math.max(0, Math.min(1, detail.confidence));
  });

  return {
    confidenceScore,
    assessment,
    details
  };
}

// URL verification function
async function verifyUrl(url) {
  // In a real app, you would fetch the URL content and analyze it
  return {
    confidenceScore: 0.76,
    assessment: "This content contains a mix of factual and misleading information",
    details: [
      { point: "Multiple claims are not supported by reliable sources", confidence: 0.82 },
      { point: "Some statistics are presented out of context", confidence: 0.79 },
      { point: "Article contains credible information but lacks important context", confidence: 0.68 }
    ]
  };
}

// File verification function
async function verifyFile(file) {
  // In a real app, you would analyze the file based on its type
  const fileType = file.mimetype;
  
  // For now, return mock data
  return {
    confidenceScore: 0.92,
    assessment: "This content appears to be highly factual and accurate",
    details: [
      { point: "All key claims are verified by reliable sources", confidence: 0.95 },
      { point: "Content presents balanced viewpoints", confidence: 0.89 },
      { point: "Data is recent and accurately represented", confidence: 0.93 }
    ]
  };
}