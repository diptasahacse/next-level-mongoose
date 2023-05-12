import express from "express";
import cors from "cors";

const app = express();

// Using cors
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to mongoose");
});

export default app;
