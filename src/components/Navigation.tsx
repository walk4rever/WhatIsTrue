import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession, signOut } from 'next-auth/react';
import styles from '../styles/Navigation.module.css';

export default function Navigation() {
  const { data: session } = useSession();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push('/');
  };

  return (
    <nav className={styles.navigation}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          WhatIsTrue
        </Link>

        <button 
          className={styles.menuButton} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
          <Link 
            href="/verify" 
            className={router.pathname === '/verify' ? styles.activeLink : ''}
          >
            Verify Content
          </Link>
          <Link 
            href="/about" 
            className={router.pathname === '/about' ? styles.activeLink : ''}
          >
            About
          </Link>
          <Link 
            href="/api-docs" 
            className={router.pathname === '/api-docs' ? styles.activeLink : ''}
          >
            API
          </Link>
          
          {session ? (
            <>
              <Link 
                href="/dashboard" 
                className={router.pathname === '/dashboard' ? styles.activeLink : ''}
              >
                Dashboard
              </Link>
              <button onClick={handleSignOut} className={styles.authButton}>
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link 
                href="/login"
                className={styles.authButton}
              >
                Login
              </Link>
              <Link 
                href="/register"
                className={`${styles.authButton} ${styles.registerButton}`}
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}