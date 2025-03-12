import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/ApiDocs.module.css';

export default function ApiDocs() {
  return (
    <div className={styles.container}>
      <Head>
        <title>API Documentation - WhatIsTrue</title>
        <meta name="description" content="WhatIsTrue API documentation" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>API Documentation</h1>

        <div className={styles.docSection}>
          <h2>Overview</h2>
          <p>
            The WhatIsTrue API allows you to programmatically verify the truthfulness of content. 
            Our API can analyze text, URLs, images, audio, and video files to provide a confidence 
            score and detailed assessment of the content's factual accuracy.
          </p>
        </div>

        <div className={styles.docSection}>
          <h2>Authentication</h2>
          <p>
            All API requests require authentication using an API key. You can generate an API key 
            from your <Link href="/dashboard">dashboard</Link>.
          </p>
          <p>
            Include your API key in the request headers:
          </p>
          <pre className={styles.codeBlock}>
            <code>{`Authorization: Bearer YOUR_API_KEY`}</code>
          </pre>
        </div>

        <div className={styles.docSection}>
          <h2>Base URL</h2>
          <p>
            All API endpoints are relative to:
          </p>
          <pre className={styles.codeBlock}>
            <code>https://api.whatistrue.com/v1</code>
          </pre>
        </div>

        <div className={styles.docSection}>
          <h2>Endpoints</h2>
          
          <div className={styles.endpoint}>
            <h3>Verify Text</h3>
            <p><span className={styles.method}>POST</span> /verify/text</p>
            <p>Analyzes the truthfulness of text content.</p>
            
            <h4>Request Body</h4>
            <pre className={styles.codeBlock}>
              <code>{`{
  "text": "The content to verify"
}`}</code>
            </pre>
            
            <h4>Example Response</h4>
            <pre className={styles.codeBlock}>
              <code>{`{
  "confidence_score": 0.85,
  "assessment": "This content appears to be mostly factual with some minor inaccuracies",
  "details": [
    {
      "point": "The central claim is supported by evidence",
      "confidence": 0.9
    },
    {
      "point": "Some contextual information is missing",
      "confidence": 0.7
    },
    {
      "point": "No significant factual errors detected",
      "confidence": 0.95
    }
  ]
}`}</code>
            </pre>
          </div>

          <div className={styles.endpoint}>
            <h3>Verify URL</h3>
            <p><span className={styles.method}>POST</span> /verify/url</p>
            <p>Fetches and analyzes content from a URL.</p>
            
            <h4>Request Body</h4>
            <pre className={styles.codeBlock}>
              <code>{`{
  "url": "https://example.com/article"
}`}</code>
            </pre>
            
            <h4>Example Response</h4>
            <pre className={styles.codeBlock}>
              <code>{`{
  "confidence_score": 0.76,
  "assessment": "This content contains a mix of factual and misleading information",
  "details": [
    {
      "point": "Multiple claims are not supported by reliable sources",
      "confidence": 0.82
    },
    {
      "point": "Some statistics are presented out of context",
      "confidence": 0.79
    },
    {
      "point": "Article contains credible information but lacks important context",
      "confidence": 0.68
    }
  ]
}`}</code>
            </pre>
          </div>

          <div className={styles.endpoint}>
            <h3>Verify File</h3>
            <p><span className={styles.method}>POST</span> /verify/file</p>
            <p>Analyzes the truthfulness of file content (image, audio, video).</p>
            
            <h4>Request</h4>
            <p>Send as multipart/form-data with a file field:</p>
            <pre className={styles.codeBlock}>
              <code>file: [binary file data]</code>
            </pre>
            
            <h4>Example Response</h4>
            <pre className={styles.codeBlock}>
              <code>{`{
  "confidence_score": 0.92,
  "assessment": "This content appears to be highly factual and accurate",
  "details": [
    {
      "point": "All key claims are verified by reliable sources",
      "confidence": 0.95
    },
    {
      "point": "Content presents balanced viewpoints",
      "confidence": 0.89
    },
    {
      "point": "Data is recent and accurately represented",
      "confidence": 0.93
    }
  ]
}`}</code>
            </pre>
          </div>
        </div>

        <div className={styles.docSection}>
          <h2>Rate Limits</h2>
          <p>
            Rate limits depend on your subscription plan:
          </p>
          <ul className={styles.rateList}>
            <li><strong>Free:</strong> 50 requests per month</li>
            <li><strong>Basic:</strong> 500 requests per month</li>
            <li><strong>Premium:</strong> 5000 requests per month</li>
          </ul>
        </div>

        <div className={styles.docSection}>
          <h2>Error Codes</h2>
          <table className={styles.errorTable}>
            <thead>
              <tr>
                <th>Status Code</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>400</td>
                <td>Bad Request - The request parameters are invalid</td>
              </tr>
              <tr>
                <td>401</td>
                <td>Unauthorized - Invalid API key</td>
              </tr>
              <tr>
                <td>403</td>
                <td>Forbidden - Your API key doesn't have permission</td>
              </tr>
              <tr>
                <td>429</td>
                <td>Too Many Requests - You've reached your rate limit</td>
              </tr>
              <tr>
                <td>500</td>
                <td>Internal Server Error - Something went wrong on our end</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.ctaSection}>
          <h2>Ready to Get Started?</h2>
          <p>
            Sign up now to start using our API for content verification!
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/register" className={styles.primaryButton}>
              Create Account
            </Link>
            <Link href="/dashboard" className={styles.secondaryButton}>
              Access Your Dashboard
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}