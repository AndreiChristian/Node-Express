import { NextFunction, Request, Response } from "express";
import { db } from "../db/index";
import { socket } from "../socket/socket";

export const getMessages = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { rows } = await db.query("SELECT * FROM messages", []);

    if (!rows[0]) {
      throw new Error("no messages in the db");
    }

    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
  }
};

export const postMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { body } = req.body;

    const { rows } = await db.query(
      `INSERT INTO messages(body)
    VALUES($1) RETURNING *`,
      [body]
    );

    if (!rows[0]) {
      throw new Error("cannot add to the ");
    }

    socket.getIo().emit("messages", { action: "create", message: rows[0] });

    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
  }
};
