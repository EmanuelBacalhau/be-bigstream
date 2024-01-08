/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import { MyError } from '../errors/MyError';

export function errorHandling(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof MyError) {
    return res.status(err.status).json({
      message: err.message
    });
  }

  if (err instanceof ZodError) {
    return res.status(422).json({
      message: err.errors
    });
  }

  return res.status(500).json({
    message: 'Internal server error'
  });
}
