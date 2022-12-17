import { NextFunction, Request, Response } from "express";
import { firebaseAuth } from "../../database/Firebase.js";
import { clientErrorResponse, sucessfulResponse } from "../../responses/appResponses.js";

export const verifyTokenAccessMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.header("Authorization")?.substring(7);

    if (!token) {
      return clientErrorResponse(res, new Error("No auth token, access denied"), 403);
    }

    const decoded = await firebaseAuth.verifyIdToken(token);

    return sucessfulResponse(res, decoded);
  } catch (error) {
    return clientErrorResponse(res, new Error("Formato do token inválido"));
  }
};
