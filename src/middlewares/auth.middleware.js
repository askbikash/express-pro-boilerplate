import jwt from 'jsonwebtoken';
import { ApiError } from '../utils/ApiError.js';
import { env } from '../config/env.js';
import { User } from '../models/index.js';

export const authenticate = async (req, res, next) => {
  try {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return next(new ApiError(401, 'Please authenticate'));
    }

    const decoded = jwt.verify(token, env.JWT_SECRET);
    const user = await User.findByPk(decoded.id);

    if (!user) {
      return next(new ApiError(401, 'User no longer exists'));
    }

    req.user = user;
    next();
  } catch (error) {
    return next(new ApiError(401, 'Please authenticate'));
  }
};
