import express, { Application, Request, Response } from "express";
import { router } from "./Controller/blog.controller";
import { facebookRouter } from "./Controller/facebook.controller";
import { youtubeRouter } from "./Controller/youtube.controller";
import { ImageRouter } from "./Controller/image.controller";
import dotenv from 'dotenv';

dotenv.config();
const app: Application = express();
app.use(express.json());

app.use("/metta",router)
app.use("/",facebookRouter)
app.use("/",youtubeRouter)
app.use("/",ImageRouter)


app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Note App");
});

export default app;
