import { catchAsync } from '../../utils/catchAsync.js';
import { ApiResponse } from '../../utils/ApiResponse.js';
import * as authService from './auth.service.js';

export const register = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const result = await authService.registerUser(email, password);
  res.status(201).json(new ApiResponse(201, result, 'User registered successfully'));
});

export const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const result = await authService.loginUser(email, password);
  res.status(200).json(new ApiResponse(200, result, 'Login successful'));
});
