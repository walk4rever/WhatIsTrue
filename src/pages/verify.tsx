import { useState } from 'react';
import Head from 'next/head';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from '../styles/Verify.module.css';

// Validation schema
const VerificationSchema = Yup.object().shape({
  contentType: Yup.string()
    .required('Please select a content type'),
  textContent: Yup.string()
    .when('contentType', {
      is: 'text',
      then: () => Yup.string()
        .required('Please enter text to verify')
        .min(20, 'Text is too short. Add more context for better results.'),
      otherwise: () => Yup.string()
    }),
  url: Yup.string()
    .when('contentType', {
      is: 'url',
      then: () => Yup.string().url('Please enter a valid URL').required('Please enter a URL'),
      otherwise: () => Yup.string()
    }),
});

export default function Verify() {
  const [verificationResult, setVerificationResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event, setFieldValue) => {
    const file = event.currentTarget.files[0];
    setSelectedFile(file);
    setFieldValue('file', file);
  };

  const handleSubmit = async (values) => {
    setIsLoading(true);
    try {
      // Send data to API
      const formData = new FormData();
      
      formData.append('contentType', values.contentType);
      
      if (values.contentType === 'text') {
        formData.append('textContent', values.textContent);
      } else if (values.contentType === 'url') {
        formData.append('url', values.url);
      } else if (values.contentType === 'file') {
        formData.append('file', selectedFile);
      }
      
      console.log("FormData being sent:", Object.fromEntries(formData));
      
      // Call the API endpoint
      const response = await fetch('/api/verify', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error(`API error (${response.status}):`, errorText);
        throw new Error(`API returned status ${response.status}: ${errorText}`);
      }
      
      const result = await response.json();
      setVerificationResult(result);
      setIsLoading(false);
    } catch (error) {
      console.error('Verification error:', error);
      setIsLoading(false);
      // Could add error state handling here
      alert(`An error occurred during verification: ${error.message}`);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Verify Content - WhatIsTrue</title>
        <meta name="description" content="Verify the truth of any content" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Verify Content</h1>

        <div className={styles.verificationForm}>
          <Formik
            initialValues={{
              contentType: 'text',
              textContent: '',
              url: '',
              file: null
            }}
            validationSchema={VerificationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, setFieldValue }) => (
              <Form>
                <div className={styles.formSection}>
                  <label>Content Type:</label>
                  <div className={styles.contentTypeButtons}>
                    <label>
                      <Field type="radio" name="contentType" value="text" />
                      Text
                    </label>
                    <label>
                      <Field type="radio" name="contentType" value="url" />
                      URL
                    </label>
                    <label>
                      <Field type="radio" name="contentType" value="file" />
                      File Upload
                    </label>
                  </div>
                </div>

                {values.contentType === 'text' && (
                  <div className={styles.formSection}>
                    <label htmlFor="textContent">Enter text to verify:</label>
                    <Field
                      as="textarea"
                      id="textContent"
                      name="textContent"
                      rows="8"
                      className={styles.textArea}
                      placeholder="Paste or type the text content you want to verify for truthfulness. The more context provided, the more accurate the assessment will be. For best results, include at least several sentences."
                    />
                    <div className={styles.textHelper}>
                      <span>Characters: {values.textContent ? values.textContent.length : 0}</span>
                      {values.textContent && values.textContent.length < 100 && 
                        <span className={styles.textWarning}>
                          Add more content for better accuracy
                        </span>
                      }
                    </div>
                    <ErrorMessage name="textContent" component="div" className={styles.error} />
                  </div>
                )}

                {values.contentType === 'url' && (
                  <div className={styles.formSection}>
                    <label htmlFor="url">Enter URL to verify:</label>
                    <Field
                      type="text"
                      id="url"
                      name="url"
                      placeholder="https://example.com/article"
                    />
                    <ErrorMessage name="url" component="div" className={styles.error} />
                  </div>
                )}

                {values.contentType === 'file' && (
                  <div className={styles.formSection}>
                    <label htmlFor="file">Select file to verify:</label>
                    <input
                      id="file"
                      name="file"
                      type="file"
                      onChange={(event) => handleFileChange(event, setFieldValue)}
                    />
                    <div className={styles.fileInfo}>
                      {selectedFile && (
                        <p>Selected file: {selectedFile.name} ({Math.round(selectedFile.size / 1024)} KB)</p>
                      )}
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isLoading}
                >
                  {isLoading ? 'Verifying...' : 'Verify Content'}
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {isLoading && (
          <div className={styles.loadingContainer}>
            <p>Analyzing content...</p>
            <div className={styles.spinner}></div>
          </div>
        )}

        {verificationResult && (
          <div className={styles.resultContainer}>
            <h2>Verification Results</h2>
            
            <div className={styles.scoreContainer}>
              <div className={styles.scoreCircle} style={{ 
                background: `conic-gradient(
                  #0070f3 ${verificationResult.confidenceScore * 360}deg, 
                  #e0e0e0 ${verificationResult.confidenceScore * 360}deg
                )` 
              }}>
                <span>{Math.round(verificationResult.confidenceScore * 100)}%</span>
              </div>
              <p>Truth Confidence</p>
            </div>
            
            <div className={styles.assessmentBox}>
              <h3>Assessment</h3>
              <p>{verificationResult.assessment}</p>
            </div>
            
            <div className={styles.detailsBox}>
              <h3>Details</h3>
              <ul>
                {verificationResult.details.map((detail, index) => (
                  <li key={index}>
                    <span>{detail.point}</span>
                    <span className={styles.detailConfidence}>
                      Confidence: {Math.round(detail.confidence * 100)}%
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}