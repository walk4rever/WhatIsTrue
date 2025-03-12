import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/User';

// Middleware for API route authentication
export default async function authMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  next: () => Promise<void>
) {
  // Check for API key in headers
  const authHeader = req.headers.authorization;
  
  if (authHeader && authHeader.startsWith('Bearer ')) {
    // API key authentication
    const apiKey = authHeader.substring(7);
    
    await dbConnect();
    
    try {
      const user = await User.findOne({ apiKey });
      
      if (!user) {
        return res.status(401).json({ message: 'Invalid API key' });
      }
      
      // Check subscription and usage limits
      if (user.subscription.requestsRemaining <= 0) {
        return res.status(429).json({ 
          message: 'API request limit reached. Please upgrade your plan or wait for your usage to reset.',
          resetDate: user.subscription.expiresAt
        });
      }
      
      // Decrement remaining requests
      await User.findByIdAndUpdate(user._id, {
        $inc: { 'subscription.requestsRemaining': -1 }
      });
      
      // Add user to request object
      req['user'] = user;
      
      // Continue to API handler
      return next();
    } catch (error) {
      console.error('API authentication error:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    // Session-based authentication (for web app)
    const session = await getSession({ req });
    
    if (!session) {
      return res.status(401).json({ message: 'Not authenticated' });
    }
    
    // Continue to API handler
    return next();
  }
}