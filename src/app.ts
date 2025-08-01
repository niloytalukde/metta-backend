import express, { Application, Request, Response } from "express";
import cors from "cors";
import { router } from "./app/Controller/blog.controller";
import { facebookRouter } from "./app/Controller/facebook.controller";
import { youtubeRouter } from "./app/Controller/youtube.controller";
import { ImageRouter } from "./app/Controller/image.controller";
import dotenv from "dotenv";
import { newsRouter } from "./app/Controller/news.controller";

dotenv.config();
const app: Application = express();
app.use(express.json());
app.use(cors());

app.use(
  cors({
    origin: ["https://metta-backend.vercel.app", "http://localhost:5173/"],
    credentials: true,
  })
);

app.use("/metta", router);
app.use("/facebook", facebookRouter);
app.use("/youtube", youtubeRouter);
app.use("/image", ImageRouter);
app.use("/news", newsRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Note App");
});

export default app;
