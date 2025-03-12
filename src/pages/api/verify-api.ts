import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import axios from 'axios';
import fs from 'fs';
import authMiddleware from './middleware/auth';

// Configure to not parse the request body automatically
export const config = {
  api: {
    bodyParser: false,
  },
};

// API handler for verification endpoint
async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Parse the form data
    const form = new formidable.IncomingForm();
    form.keepExtensions = true;
    
    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        resolve([fields, files]);
      });
    });

    // Process based on content type
    const contentType = fields.contentType;
    let verificationResult;

    if (contentType === 'text') {
      const textContent = fields.textContent;
      verificationResult = await verifyTextContent(textContent);
    } 
    else if (contentType === 'url') {
      const url = fields.url;
      verificationResult = await verifyUrl(url);
    } 
    else if (contentType === 'file') {
      const file = files.file;
      verificationResult = await verifyFile(file);
    } 
    else {
      return res.status(400).json({ message: 'Invalid content type' });
    }

    // Return result
    return res.status(200).json(verificationResult);
  } catch (error) {
    console.error('Error processing verification request:', error);
    return res.status(500).json({ message: 'Error processing verification request' });
  }
}

// Text verification function
async function verifyTextContent(text) {
  // In a real app, you would call an AI service or fact-checking API
  try {
    // Mock API call to AI service
    // const response = await axios.post(
    //   'https://api.aiservice.com/analyze',
    //   { content: text, type: 'text' },
    //   { headers: { Authorization: `Bearer ${process.env.AI_SERVICE_API_KEY}` } }
    // );
    // return response.data;
    
    // Return mock data
    return {
      confidenceScore: 0.85,
      assessment: "This content appears to be mostly factual with some minor inaccuracies",
      details: [
        { point: "The central claim is supported by evidence", confidence: 0.9 },
        { point: "Some contextual information is missing", confidence: 0.7 },
        { point: "No significant factual errors detected", confidence: 0.95 }
      ]
    };
  } catch (error) {
    console.error('Text verification error:', error);
    throw new Error('Failed to verify text content');
  }
}

// URL verification function
async function verifyUrl(url) {
  try {
    // Mock URL content fetching and verification
    // const response = await axios.post(
    //   'https://api.aiservice.com/analyze',
    //   { content: url, type: 'url' },
    //   { headers: { Authorization: `Bearer ${process.env.AI_SERVICE_API_KEY}` } }
    // );
    // return response.data;
    
    return {
      confidenceScore: 0.76,
      assessment: "This content contains a mix of factual and misleading information",
      details: [
        { point: "Multiple claims are not supported by reliable sources", confidence: 0.82 },
        { point: "Some statistics are presented out of context", confidence: 0.79 },
        { point: "Article contains credible information but lacks important context", confidence: 0.68 }
      ]
    };
  } catch (error) {
    console.error('URL verification error:', error);
    throw new Error('Failed to verify URL content');
  }
}

// File verification function
async function verifyFile(file) {
  try {
    const fileType = file.mimetype;
    
    // In a real app, you would process different file types differently
    // and send to appropriate AI services
    
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
  } catch (error) {
    console.error('File verification error:', error);
    throw new Error('Failed to verify file content');
  }
}

// Wrap the handler with the auth middleware
export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return authMiddleware(req, res, () => handler(req, res));
}