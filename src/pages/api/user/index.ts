import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/User';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  // Check authentication
  if (!session) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  await dbConnect();

  const userId = session.user.id;

  // Handle different HTTP methods
  switch (req.method) {
    case 'GET':
      try {
        const user = await User.findById(userId).select('-password');
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json(user);
      } catch (error) {
        console.error('Error fetching user:', error);
        return res.status(500).json({ message: 'Error fetching user data' });
      }

    case 'PUT':
      try {
        const { name, email } = req.body;
        
        // Basic validation
        if (!name || !email) {
          return res.status(400).json({ message: 'Name and email are required' });
        }
        
        // Update user
        const updatedUser = await User.findByIdAndUpdate(
          userId,
          { 
            name, 
            email 
          },
          { new: true, runValidators: true }
        ).select('-password');
        
        if (!updatedUser) {
          return res.status(404).json({ message: 'User not found' });
        }
        
        return res.status(200).json(updatedUser);
      } catch (error) {
        console.error('Error updating user:', error);
        return res.status(500).json({ message: 'Error updating user data' });
      }

    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}