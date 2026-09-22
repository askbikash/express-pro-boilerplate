import { ApiError } from '../utils/ApiError.js';

// Simple Role-Based Access Control mapping
// In a real app, this could be loaded from the database
const roles = {
  admin: ['manage:users', 'invoice:read', 'invoice:write'],
  user: ['invoice:read'],
};

export const authorize = (requiredPermission) => (req, res, next) => {
  if (!req.user) {
    return next(new ApiError(401, 'User not authenticated'));
  }

  const userRole = req.user.role;
  const userPermissions = roles[userRole] || [];

  if (!userPermissions.includes(requiredPermission)) {
    return next(new ApiError(403, 'Forbidden: Insufficient permissions'));
  }

  next();
};
