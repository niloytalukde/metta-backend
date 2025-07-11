import express, { Application, Request, Response } from "express";
import { router } from "./Contoralers/blog.contoraler";

const app: Application = express();
app.use(express.json());

app.use("/metta",router)


app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Note App");
});

export default app;
