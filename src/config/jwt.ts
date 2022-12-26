/* eslint-disable prettier/prettier */
import { registerAs } from '@nestjs/config';

export const jwtConfig = registerAs('jwt', () => ({
  secret: process.env.JWT_SECRET || 'super-secret',
  expiresIn: process.env.JWT_EXPIRES_IN || '7d',
}));
