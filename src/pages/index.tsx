import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>WhatIsTrue - Verify Content Truth</title>
        <meta name="description" content="Check the truth of any content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span>WhatIsTrue</span>
        </h1>

        <p className={styles.description}>
          Verify the truth of text, files, images, audio, video, or web content
        </p>

        <div className={styles.grid}>
          <Link href="/verify" className={styles.card}>
            <h2>Verify Content &rarr;</h2>
            <p>Submit content for truth verification analysis.</p>
          </Link>

          <Link href="/about" className={styles.card}>
            <h2>About &rarr;</h2>
            <p>Learn about how our truth verification works.</p>
          </Link>

          <Link href="/api-docs" className={styles.card}>
            <h2>API Reference &rarr;</h2>
            <p>Documentation for our content verification API.</p>
          </Link>

          <Link href="/login" className={styles.card}>
            <h2>Account &rarr;</h2>
            <p>
              Manage your account and API subscriptions.
            </p>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://whatistrue.com" target="_blank" rel="noopener noreferrer">
          Powered by WhatIsTrue
        </a>
      </footer>
    </div>
  );
}