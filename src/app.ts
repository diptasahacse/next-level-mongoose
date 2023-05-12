import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();

// Using cors
app.use(cors());

app.get("/", (req:Request, res:Response) => {
  res.send("Welcome to mongoose");
});

export default app;
