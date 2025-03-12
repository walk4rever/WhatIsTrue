import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About - WhatIsTrue</title>
        <meta name="description" content="Learn about WhatIsTrue's content verification technology" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>About WhatIsTrue</h1>

        <div className={styles.infoSection}>
          <div className={styles.textContent}>
            <h2>Our Mission</h2>
            <p>
              In an era of widespread misinformation and deepfakes, determining what's true has 
              never been more challenging or more important. WhatIsTrue was founded with a simple 
              mission: to give people and organizations the tools they need to verify the accuracy 
              of digital content.
            </p>
            <p>
              We believe that access to reliable truth verification is essential for maintaining 
              trust in our information ecosystem and for making informed decisions in our 
              increasingly digital world.
            </p>
          </div>
        </div>

        <div className={styles.infoSection}>
          <div className={styles.textContent}>
            <h2>Our Technology</h2>
            <p>
              WhatIsTrue combines advanced artificial intelligence with expert fact-checking 
              methodologies to analyze content across multiple formats:
            </p>
            <ul className={styles.featureList}>
              <li>
                <strong>Text Analysis:</strong> Our natural language processing models examine 
                the factual claims, context, and linguistic patterns to identify potential 
                inaccuracies.
              </li>
              <li>
                <strong>Image Verification:</strong> We detect manipulated images using digital 
                forensics and cross-reference visual content against reliable sources.
              </li>
              <li>
                <strong>Audio & Video Authentication:</strong> Our systems analyze audio 
                waveforms and video frames to detect synthetic content or manipulated media.
              </li>
              <li>
                <strong>Source Credibility Assessment:</strong> We evaluate the reliability of 
                content sources based on their historical accuracy and reputation.
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.infoSection}>
          <div className={styles.textContent}>
            <h2>How It Works</h2>
            <div className={styles.processSteps}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <h3>Submit Content</h3>
                <p>Upload text, images, audio, video, or provide a URL.</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <h3>AI Analysis</h3>
                <p>Our models analyze the content for factual accuracy and manipulation.</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <h3>Source Verification</h3>
                <p>Claims are cross-referenced against reliable information sources.</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>4</div>
                <h3>Detailed Report</h3>
                <p>Receive a confidence score and detailed assessment of the content's truthfulness.</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.infoSection}>
          <div className={styles.textContent}>
            <h2>Use Cases</h2>
            <div className={styles.useCases}>
              <div className={styles.useCase}>
                <h3>Journalism</h3>
                <p>
                  Verify sources and fact-check information before publication to maintain 
                  journalistic integrity and accuracy.
                </p>
              </div>
              <div className={styles.useCase}>
                <h3>Education</h3>
                <p>
                  Help students and educators evaluate the credibility of online resources and 
                  develop critical media literacy skills.
                </p>
              </div>
              <div className={styles.useCase}>
                <h3>Business</h3>
                <p>
                  Protect brand reputation by verifying information before sharing it with 
                  customers or stakeholders.
                </p>
              </div>
              <div className={styles.useCase}>
                <h3>Personal Use</h3>
                <p>
                  Check the accuracy of news articles, social media posts, and other content 
                  before believing or sharing.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h2>Ready to discover what's true?</h2>
          <div className={styles.ctaButtons}>
            <Link href="/verify" className={styles.primaryButton}>
              Try It Now
            </Link>
            <Link href="/register" className={styles.secondaryButton}>
              Create Account
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}