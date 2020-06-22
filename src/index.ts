import express, { Application, Request, Response, NextFunction } from "express";
import second from "./second";
const app: Application = express();

app.use(second);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello from typescript node");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Listing port : ", 3000);
});
