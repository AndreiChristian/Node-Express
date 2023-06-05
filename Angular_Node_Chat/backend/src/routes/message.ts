import { NextFunction, Request, Response, Router } from "express";

const router = Router();

router.post("/", (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.body;

    res.status(201).json({ name });
  } catch (err) {
    console.log(err);
  }
});

export default router;
