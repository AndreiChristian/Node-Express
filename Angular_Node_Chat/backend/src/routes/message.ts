import { Router } from "express";

const router = Router();

import { getMessages, postMessage } from "../controllers/message";

router.get("/messages", getMessages);

router.post("/messages", postMessage);

export default router;
