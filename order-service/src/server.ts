import express, { Request, Response } from "express";

const app = express();
const port = 4000;

app.get("/", (req: Request, res: Response) => {
  res.send("");
});

app.listen(port, () => {
  console.log('✅ order service is up @ '+port);
});
 