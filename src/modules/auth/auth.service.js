import jwt from 'jsonwebtoken';
import { User } from '../../models/index.js';
import { ApiError } from '../../utils/ApiError.js';
import { env } from '../../config/env.js';

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, env.JWT_SECRET, {
    expiresIn: env.JWT_EXPIRES_IN,
  });
};

export const registerUser = async (email, password) => {
  const existingUser = await User.findByEmail(email);
  if (existingUser) {
    throw new ApiError(400, 'Email already in use');
  }

  const user = await User.create({ email, password });
  const token = generateToken(user.id);

  return { user: { id: user.id, email: user.email, role: user.role }, token };
};

export const loginUser = async (email, password) => {
  const user = await User.findByEmail(email);
  if (!user) {
    throw new ApiError(401, 'Invalid email or password');
  }

  const isPasswordMatch = await user.comparePassword(password);
  if (!isPasswordMatch) {
    throw new ApiError(401, 'Invalid email or password');
  }

  const token = generateToken(user.id);

  return { user: { id: user.id, email: user.email, role: user.role }, token };
};
