# WhatIsTrue

A web application that evaluates the truthfulness of user-provided content.

## Features

- Truth verification for text input
- Truth verification for file uploads (images, audio, video)
- Truth verification for web URLs
- User management system with authentication
- API subscription for programmatic access
- Dashboard with API key management and usage statistics

## Tech Stack

- Next.js for frontend and API routes
- React for UI components
- MongoDB for database
- TypeScript for type safety
- NextAuth.js for authentication
- Formik for form handling
- Yup for form validation

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- MongoDB (local or Atlas)

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/whatistrue.git
   cd whatistrue
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Create a `.env.local` file with the following variables:
   ```
   MONGODB_URI=mongodb://localhost:27017/whatistrue
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key
   AI_SERVICE_API_KEY=your-ai-service-api-key
   ```

4. Start the development server
   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## API Usage

The API allows programmatic access to the truth verification service. To use it:

1. Create an account and subscribe to an API plan
2. Generate an API key in your account dashboard
3. Use the API key in your requests:

```
POST /api/verify
Headers: {
  "Authorization": "Bearer YOUR_API_KEY"
}
Body: {
  "contentType": "text",
  "textContent": "Content to verify"
}
```

## Subscription Plans

- **Free**: 50 verifications per month
- **Basic**: 500 verifications per month 
- **Premium**: 5000 verifications per month

## License

MIT