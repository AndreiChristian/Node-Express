import { NextFunction, Request, Response } from "express";
import bcrypt from "bcryptjs";

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    res.json({ email, password });
  } catch (err) {
    console.log(err);
    next();
  }
};

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  try {
    const password_hash = await bcrypt.hash(password, 10);
  } catch (err) {
    console.log(err);
    next();
  }
};

export const logout = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (err) {
    console.log(err);
    next();
  }
};
