import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";

const app: Application = express();

// Using cors
app.use(cors());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Welcome to mongoose");
  next();
});

export default app;
