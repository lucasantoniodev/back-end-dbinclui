import { Router } from "express";
import { verifyTokenAccessMiddleware } from "../../middlewares/auth/verifyTokenAccessMiddleware.js";

const expressionsRouter = Router();

expressionsRouter.get("/", verifyTokenAccessMiddleware);

export { expressionsRouter };
