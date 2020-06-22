import express, { Application, Request, Response, NextFunction } from "express";
const app = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello from typescript node");
});

app.listen(5000, () => console.log("Server running"));
