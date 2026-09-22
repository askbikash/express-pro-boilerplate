import { ZodError } from 'zod';
import { ApiError } from '../utils/ApiError.js';
import { env } from '../config/env.js';
import { logger } from '../utils/logger.js';

export const errorHandler = (err, req, res, _next) => {
  let error = err;

  // Handle Zod validation errors
  if (error instanceof ZodError) {
    const formattedErrors = error.errors.map((e) => ({
      field: e.path.join('.'),
      message: e.message,
    }));
    error = new ApiError(400, 'Validation Error', true);
    error.details = formattedErrors;
  }

  // Handle default errors
  if (!(error instanceof ApiError)) {
    const statusCode = error.statusCode || 500;
    const message = error.message || 'Internal Server Error';
    error = new ApiError(statusCode, message, false, err.stack);
  }

  const response = {
    success: false,
    message: error.message,
    ...(error.details && { details: error.details }),
    ...(env.NODE_ENV === 'development' && { stack: error.stack }),
  };

  if (env.NODE_ENV !== 'development' && !error.isOperational) {
    response.message = 'Internal Server Error';
  }

  if (error.statusCode >= 500) {
    logger.error(error);
  } else {
    logger.warn({ message: error.message, details: error.details });
  }

  res.status(error.statusCode).json(response);
};

export const notFoundHandler = (req, res, next) => {
  next(new ApiError(404, `Not Found - ${req.originalUrl}`));
};
