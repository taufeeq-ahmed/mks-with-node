import { NextFunction, Request, Response, Router } from "express";

const catalogRouter = Router();

export const catalogService = {};

catalogRouter.post(
  "product",
  async (req: Request, res: Response, next: NextFunction) => {
    return;
  }
);

export default catalogRouter;
