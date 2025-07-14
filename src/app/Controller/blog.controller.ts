
import express, { Request, Response } from 'express';
import { Blog } from '../../models/blogModel';

export const router =express.Router()

// create a blog
router.post("/create-blog", async (req: Request, res: Response) => {
  try {
    const {blogData} = req.body;
    const blog = await Blog.create(blogData);
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
router.get("/blogs", async (req: Request, res: Response) => {
  try {
    const blogs = await Blog.find();
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
router.get("/blog/:id", async (req: Request, res: Response) => {
  try {
    const id =req.params.id
    const blog = await Blog.findById(id);
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
// Update Blog 
router.patch("/update-blog/:id", async (req: Request, res: Response) => {
  try {
    const UpdateBlog =req.body
    const id =req.params.id
    const blog = await Blog.findByIdAndUpdate(id,UpdateBlog,{new:true});

     res.status(200).json({
      success: true,
      blog,
      message: "Blog Update Successful",
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
router.delete("/delete-blog/:id", async (req: Request, res: Response) => {
  try {
    
    const id =req.params.id
    const blog = await Blog.findByIdAndDelete(id);

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