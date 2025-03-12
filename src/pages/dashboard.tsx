import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useSession, getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import styles from '../styles/Dashboard.module.css';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  const [userData, setUserData] = useState(null);
  const [apiKey, setApiKey] = useState('');
  const [loading, setLoading] = useState(true);
  const [subscriptionPlan, setSubscriptionPlan] = useState('');
  const [showApiKey, setShowApiKey] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  // Fetch user data when component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      if (status === 'authenticated') {
        try {
          const response = await fetch('/api/user');
          const data = await response.json();
          
          if (response.ok) {
            setUserData(data);
            setApiKey(data.apiKey || '');
            setSubscriptionPlan(data.subscription?.plan || 'free');
          } else {
            setMessage({ text: 'Failed to fetch user data', type: 'error' });
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
          setMessage({ text: 'Error fetching user data', type: 'error' });
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUserData();
  }, [status]);

  // Redirect if not authenticated
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.replace('/login');
    }
  }, [status, router]);

  // Generate new API key
  const generateApiKey = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/user/api-key', {
        method: 'POST',
      });
      
      const data = await response.json();
      
      if (response.ok && data.apiKey) {
        setApiKey(data.apiKey);
        setShowApiKey(true);
        setMessage({ text: 'New API key generated successfully', type: 'success' });
      } else {
        setMessage({ text: data.message || 'Failed to generate API key', type: 'error' });
      }
    } catch (error) {
      console.error('Error generating API key:', error);
      setMessage({ text: 'Error generating API key', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  // Update subscription plan
  const updateSubscription = async (plan) => {
    try {
      setLoading(true);
      const response = await fetch('/api/user/subscription', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan }),
      });
      
      const data = await response.json();
      
      if (response.ok && data.subscription) {
        setSubscriptionPlan(data.subscription.plan);
        setMessage({ text: `Subscription updated to ${plan} plan`, type: 'success' });
        
        // Update local user data with new subscription info
        setUserData(prev => ({
          ...prev,
          subscription: data.subscription,
        }));
      } else {
        setMessage({ text: data.message || 'Failed to update subscription', type: 'error' });
      }
    } catch (error) {
      console.error('Error updating subscription:', error);
      setMessage({ text: 'Error updating subscription', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  // Copy API key to clipboard
  const copyApiKey = () => {
    navigator.clipboard.writeText(apiKey);
    setMessage({ text: 'API key copied to clipboard', type: 'success' });
    setTimeout(() => setMessage({ text: '', type: '' }), 3000);
  };

  if (status === 'loading' || loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard - WhatIsTrue</title>
        <meta name="description" content="Manage your WhatIsTrue account" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Dashboard</h1>

        {message.text && (
          <div className={`${styles.message} ${styles[message.type]}`}>
            {message.text}
          </div>
        )}

        {userData && (
          <>
            <section className={styles.section}>
              <h2>Account Information</h2>
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <span className={styles.label}>Name:</span>
                  <span>{userData.name}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.label}>Email:</span>
                  <span>{userData.email}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.label}>Member Since:</span>
                  <span>{new Date(userData.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2>API Access</h2>
              <div className={styles.apiKeySection}>
                {apiKey ? (
                  <>
                    <div className={styles.apiKeyContainer}>
                      <span className={styles.label}>API Key:</span>
                      <div className={styles.apiKeyDisplay}>
                        <input 
                          type={showApiKey ? 'text' : 'password'} 
                          value={apiKey}
                          readOnly
                          className={styles.apiKeyInput}
                        />
                        <button 
                          onClick={() => setShowApiKey(!showApiKey)}
                          className={styles.toggleVisibilityButton}
                        >
                          {showApiKey ? 'Hide' : 'Show'}
                        </button>
                        <button 
                          onClick={copyApiKey}
                          className={styles.copyButton}
                        >
                          Copy
                        </button>
                      </div>
                    </div>
                    <button 
                      onClick={generateApiKey}
                      className={styles.dangerButton}
                    >
                      Generate New API Key
                    </button>
                    <p className={styles.warningText}>
                      Warning: Generating a new API key will invalidate your current key.
                    </p>
                  </>
                ) : (
                  <div>
                    <p>You don't have an API key yet.</p>
                    <button 
                      onClick={generateApiKey}
                      className={styles.primaryButton}
                    >
                      Generate API Key
                    </button>
                  </div>
                )}
              </div>
            </section>

            <section className={styles.section}>
              <h2>Subscription</h2>
              <div className={styles.subscriptionGrid}>
                <div className={`${styles.subscriptionCard} ${subscriptionPlan === 'free' ? styles.activePlan : ''}`}>
                  <h3>Free</h3>
                  <p className={styles.price}>$0<span>/month</span></p>
                  <ul className={styles.featuresList}>
                    <li>50 verification requests per month</li>
                    <li>Basic content verification</li>
                    <li>Text analysis</li>
                  </ul>
                  {subscriptionPlan === 'free' ? (
                    <button className={styles.currentPlanButton}>Current Plan</button>
                  ) : (
                    <button 
                      onClick={() => updateSubscription('free')}
                      className={styles.primaryButton}
                    >
                      Downgrade
                    </button>
                  )}
                </div>

                <div className={`${styles.subscriptionCard} ${subscriptionPlan === 'basic' ? styles.activePlan : ''}`}>
                  <h3>Basic</h3>
                  <p className={styles.price}>$9.99<span>/month</span></p>
                  <ul className={styles.featuresList}>
                    <li>500 verification requests per month</li>
                    <li>Advanced content verification</li>
                    <li>Text & image analysis</li>
                    <li>URL content verification</li>
                  </ul>
                  {subscriptionPlan === 'basic' ? (
                    <button className={styles.currentPlanButton}>Current Plan</button>
                  ) : (
                    <button 
                      onClick={() => updateSubscription('basic')}
                      className={styles.primaryButton}
                    >
                      {subscriptionPlan === 'premium' ? 'Downgrade' : 'Upgrade'}
                    </button>
                  )}
                </div>

                <div className={`${styles.subscriptionCard} ${subscriptionPlan === 'premium' ? styles.activePlan : ''}`}>
                  <h3>Premium</h3>
                  <p className={styles.price}>$29.99<span>/month</span></p>
                  <ul className={styles.featuresList}>
                    <li>5000 verification requests per month</li>
                    <li>Full content verification suite</li>
                    <li>Text, image, audio & video analysis</li>
                    <li>Batch processing</li>
                    <li>Priority support</li>
                  </ul>
                  {subscriptionPlan === 'premium' ? (
                    <button className={styles.currentPlanButton}>Current Plan</button>
                  ) : (
                    <button 
                      onClick={() => updateSubscription('premium')}
                      className={styles.primaryButton}
                    >
                      Upgrade
                    </button>
                  )}
                </div>
              </div>
            </section>

            {userData.subscription && (
              <section className={styles.section}>
                <h2>Usage</h2>
                <div className={styles.usageStats}>
                  <div className={styles.usageStat}>
                    <span className={styles.label}>Plan:</span>
                    <span className={styles.value}>{userData.subscription.plan.charAt(0).toUpperCase() + userData.subscription.plan.slice(1)}</span>
                  </div>
                  <div className={styles.usageStat}>
                    <span className={styles.label}>Requests Remaining:</span>
                    <span className={styles.value}>{userData.subscription.requestsRemaining}</span>
                  </div>
                  <div className={styles.usageStat}>
                    <span className={styles.label}>Monthly Limit:</span>
                    <span className={styles.value}>{userData.subscription.maxRequestsPerMonth}</span>
                  </div>
                  <div className={styles.usageStat}>
                    <span className={styles.label}>Renews On:</span>
                    <span className={styles.value}>{new Date(userData.subscription.expiresAt).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className={styles.usageBar}>
                  <div 
                    className={styles.usageProgress}
                    style={{ 
                      width: `${Math.round(((userData.subscription.maxRequestsPerMonth - userData.subscription.requestsRemaining) / userData.subscription.maxRequestsPerMonth) * 100)}%` 
                    }}
                  ></div>
                </div>
              </section>
            )}
          </>
        )}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  
  return {
    props: { session }
  };
}