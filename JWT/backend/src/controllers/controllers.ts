import { NextFunction, Request, Response } from "express";

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json("login");
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
  try {
    res.json("signup");
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
    res.json("logout");
  } catch (err) {
    console.log(err);
    next();
  }
};
