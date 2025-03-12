import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from '../styles/Auth.module.css';

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name is too short')
    .max(50, 'Name is too long'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
  confirmPassword: Yup.string()
    .required('Please confirm your password')
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

export default function Register() {
  const [registerError, setRegisterError] = useState('');
  const router = useRouter();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          password: values.password
        })
      });

      const data = await response.json();

      if (response.ok) {
        // Auto login after successful registration
        const result = await signIn('credentials', {
          redirect: false,
          email: values.email,
          password: values.password
        });

        if (result?.error) {
          setRegisterError('Registration successful but could not log in automatically');
          router.push('/login');
        } else {
          router.push('/dashboard');
        }
      } else {
        setRegisterError(data.message || 'Registration failed');
        setSubmitting(false);
      }
    } catch (error) {
      console.error('Registration error:', error);
      setRegisterError('An error occurred during registration');
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Register - WhatIsTrue</title>
        <meta name="description" content="Create a WhatIsTrue account" />
      </Head>

      <main className={styles.main}>
        <div className={styles.authFormContainer}>
          <h1 className={styles.title}>Create Account</h1>
          
          {registerError && (
            <div className={styles.errorMessage}>
              {registerError}
            </div>
          )}

          <Formik
            initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
            validationSchema={RegisterSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <Field type="text" id="name" name="name" placeholder="Full name" />
                  <ErrorMessage name="name" component="div" className={styles.error} />
                </div>

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

                <div className={styles.formGroup}>
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <Field type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm password" />
                  <ErrorMessage name="confirmPassword" component="div" className={styles.error} />
                </div>

                <button 
                  type="submit" 
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Creating account...' : 'Register'}
                </button>
              </Form>
            )}
          </Formik>

          <div className={styles.authLinks}>
            <Link href="/login">
              Already have an account? Login
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}