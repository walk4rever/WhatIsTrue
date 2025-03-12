import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from '../styles/Auth.module.css';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
});

export default function Login() {
  const [loginError, setLoginError] = useState('');
  const router = useRouter();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email: values.email,
        password: values.password
      });

      if (result?.error) {
        setLoginError('Invalid email or password');
        setSubmitting(false);
      } else {
        // Redirect to dashboard on successful login
        router.push('/dashboard');
      }
    } catch (error) {
      console.error('Login error:', error);
      setLoginError('An error occurred during login');
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Login - WhatIsTrue</title>
        <meta name="description" content="Login to your WhatIsTrue account" />
      </Head>

      <main className={styles.main}>
        <div className={styles.authFormContainer}>
          <h1 className={styles.title}>Login</h1>
          
          {loginError && (
            <div className={styles.errorMessage}>
              {loginError}
            </div>
          )}

          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={LoginSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <Field type="email" id="email" name="email" placeholder="Email address" />
                  <ErrorMessage name="email" component="div" className={styles.error} />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="password">Password</label>
                  <Field type="password" id="password" name="password" placeholder="Password" />
                  <ErrorMessage name="password" component="div" className={styles.error} />
                </div>

                <button 
                  type="submit" 
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Logging in...' : 'Login'}
                </button>
              </Form>
            )}
          </Formik>

          <div className={styles.authLinks}>
            <Link href="/register">
              Don't have an account? Register
            </Link>
            <Link href="/forgot-password">
              Forgot your password?
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}