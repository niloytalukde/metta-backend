import express, { Request, Response } from "express";
import { News } from "../../models/news.Model";

export const newsRouter = express.Router();
// create a blog
newsRouter.post("/create-news", async (req: Request, res: Response) => {
  try {
    const newsData = req.body;
    console.log(newsData);
    const news = await News.create(newsData);
    await news.save();
    res.status(201).json({
      success: true,
      news,
      message: "News created Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

//  get all blogs
newsRouter.get("/news", async (req: Request, res: Response) => {
  try {
    const news = await News.find();
    res.status(200).json({
      success: true,
      news,
      message: "Get all news",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});
// only 4 News show
newsRouter.get("/home/News", async (req: Request, res: Response) => {
  try {
    const blogs = await News.find().limit(4);
    res.status(200).json({
      success: true,
      blogs,
      message: "Get 4 News",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});
// get single blog
newsRouter.get("/news/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const blog = await News.findById(id);
    res.status(200).json({
      success: true,
      blog,
      message: "Get Single News",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});
// Update News
newsRouter.patch("/update-news/:id", async (req: Request, res: Response) => {
  try {
    const UpdateNews = req.body;
    const id = req.params.id;
    const news = await News.findByIdAndUpdate(id, UpdateNews, { new: true });

    res.status(200).json({
      success: true,
      news,
      message: "News Update Successful",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});
// Delete News
newsRouter.delete("/delete-news/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const news = await News.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      news,
      message: "Blog Deleted Successful",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});
