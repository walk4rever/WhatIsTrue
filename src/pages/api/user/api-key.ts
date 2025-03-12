import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import crypto from 'crypto';
import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/User';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  const session = await getSession({ req });

  // Check authentication
  if (!session) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  await dbConnect();

  try {
    // Generate a new API key
    const apiKey = crypto.randomBytes(32).toString('hex');
    
    // Update user with new API key
    const updatedUser = await User.findByIdAndUpdate(
      session.user.id,
      { apiKey },
      { new: true }
    ).select('apiKey');
    
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    return res.status(200).json({ apiKey: updatedUser.apiKey });
  } catch (error) {
    console.error('Error generating API key:', error);
    return res.status(500).json({ message: 'Error generating API key' });
  }
}