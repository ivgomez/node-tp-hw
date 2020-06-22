import express, { Application, Router, Request, Response, NextFunction } from "express";

const second: Application = express();

second.get("/other", (req: Request, res: Response, next: NextFunction) => {
  res.send("I´m another route from a different file");
});

export default second;
