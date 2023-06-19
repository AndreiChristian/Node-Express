import { NextFunction, Request, Response, Router } from "express";
import { login, signup } from "../controllers/controllers";

const router = Router();

router.post("/signup", signup);

router.post("/login", login);
