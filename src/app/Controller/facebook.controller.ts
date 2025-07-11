
import express, { Request, Response } from 'express';
import { Facebook } from '../../models/url.models';

export const facebookRouter =express.Router()

// create a blog
facebookRouter.post("/create-facebook-link", async (req: Request, res: Response) => {
  try {
    const blogData = req.body;
    const blog = await Facebook.create(blogData);
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
facebookRouter.get("/facebook-links", async (req: Request, res: Response) => {
  try {
    const blogs = await Facebook.find();
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
facebookRouter.get("/blog/:id", async (req: Request, res: Response) => {
  try {
    const id =req.params.id
    const blog = await Facebook.findById(id);
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
facebookRouter.delete("/facebook-link/:id", async (req: Request, res: Response) => {
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