import { NextFunction, Request, Response } from 'express';

export const verifyAuthToken = async (
  // Remove underscore of params once you using them
  _req: Request,
  _res: Response,
  _next: NextFunction
) => {
  // Replace with your auth token verification strategy
  return true;
};