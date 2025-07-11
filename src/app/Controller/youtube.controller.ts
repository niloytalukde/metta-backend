
import express, { Request, Response } from 'express';
import { Facebook, Youtube } from '../../models/url.models';

export const youtubeRouter =express.Router()

// create a blog
youtubeRouter.post("/create-youtube-link", async (req: Request, res: Response) => {
  try {
    const blogData = req.body;
    const blog = await Youtube.create(blogData);
    await blog.save();
    res.status(201).json({
      success: true,
      blog: blog,
      message: "Blog created Successfully",
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
youtubeRouter.get("/youtube-links", async (req: Request, res: Response) => {
  try {
    const blogs = await Youtube.find();
    res.status(200).json({
      success: true,
      blogs,
      message: "Get all blogs",
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
youtubeRouter.get("/youtube-link/:id", async (req: Request, res: Response) => {
  try {
    const id =req.params.id
    const blog = await Youtube.findById(id);
     res.status(200).json({
      success: true,
      blog,
      message: "Get Single blogs",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});


// Delete Blog 
youtubeRouter.delete("/facebook-link/:id", async (req: Request, res: Response) => {
  try {
    
    const id =req.params.id
    const blog = await Facebook.findByIdAndDelete(id);

     res.status(200).json({
      success: true,
      blog,
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