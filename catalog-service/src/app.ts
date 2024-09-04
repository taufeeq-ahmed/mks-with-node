import express, { Request, Response } from "express";
import catalogRouter from "./routes/catalog.routes";

const app = express();

app.use(express.json());
app.use("/product", catalogRouter);

export default app;
