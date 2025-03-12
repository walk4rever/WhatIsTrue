import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser {
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
  apiKey?: string;
  subscription: {
    plan: 'free' | 'basic' | 'premium';
    expiresAt: Date;
    requestsRemaining: number;
    maxRequestsPerMonth: number;
  };
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
      maxlength: [50, 'Name cannot be more than 50 characters'],
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please provide a valid email',
      ],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: [8, 'Password must be at least 8 characters'],
      select: false,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    apiKey: {
      type: String,
      unique: true,
      sparse: true,
    },
    subscription: {
      plan: {
        type: String,
        enum: ['free', 'basic', 'premium'],
        default: 'free',
      },
      expiresAt: {
        type: Date,
        default: () => new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
      },
      requestsRemaining: {
        type: Number,
        default: 50, // Free tier starts with 50 requests
      },
      maxRequestsPerMonth: {
        type: Number,
        default: 50, // Free tier gets 50 requests per month
      },
    },
  },
  { timestamps: true }
);

// Pre-save hook to hash password
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error as Error);
  }
});

// Method to compare passwords
userSchema.methods.comparePassword = async function (candidatePassword: string) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Create or get model
export const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default User;