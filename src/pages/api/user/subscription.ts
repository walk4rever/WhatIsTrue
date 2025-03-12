import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/User';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only allow PUT requests
  if (req.method !== 'PUT') {
    res.setHeader('Allow', ['PUT']);
    return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  const session = await getSession({ req });

  // Check authentication
  if (!session) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  await dbConnect();

  try {
    const { plan } = req.body;
    
    if (!plan || !['free', 'basic', 'premium'].includes(plan)) {
      return res.status(400).json({ message: 'Invalid subscription plan' });
    }
    
    // Set subscription details based on plan
    let subscriptionDetails = {
      plan: plan,
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
    };
    
    // Set request limits based on plan
    if (plan === 'free') {
      subscriptionDetails['requestsRemaining'] = 50;
      subscriptionDetails['maxRequestsPerMonth'] = 50;
    } else if (plan === 'basic') {
      subscriptionDetails['requestsRemaining'] = 500;
      subscriptionDetails['maxRequestsPerMonth'] = 500;
    } else if (plan === 'premium') {
      subscriptionDetails['requestsRemaining'] = 5000;
      subscriptionDetails['maxRequestsPerMonth'] = 5000;
    }
    
    // Update user subscription
    const updatedUser = await User.findByIdAndUpdate(
      session.user.id,
      { subscription: subscriptionDetails },
      { new: true }
    ).select('subscription');
    
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    return res.status(200).json({ subscription: updatedUser.subscription });
  } catch (error) {
    console.error('Error updating subscription:', error);
    return res.status(500).json({ message: 'Error updating subscription' });
  }
}