import express, { RequestHandler } from "express";

import dotenv from "dotenv";
import cors from "cors";

import messageRouter from "./routes/message";
import { socket } from "./socket/socket";

dotenv.config();

const port = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.json() as RequestHandler);

app.use("/api", messageRouter);

const server = app.listen(port, () => {
  console.log(`Started the app on port ${port}`);
});

const io = socket.init(server);

io.on("connection", () => {
  console.log("client connected");
});
