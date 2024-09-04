import { NextFunction, Request, Response, Router } from "express";

const catalogRouter = Router();

catalogRouter.post(
  "product",
  async (req: Request, res: Response, next: NextFunction) => {
    return;
  }
);

export default catalogRouter;
