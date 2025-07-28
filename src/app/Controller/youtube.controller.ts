
import express, { Request, Response } from 'express';
import { Facebook, Youtube } from '../../models/url.models';

export const youtubeRouter =express.Router()

// create a Youtube
youtubeRouter.post("/create-youtube-link", async (req: Request, res: Response) => {
  try {
    const youtubeUrl = req.body;
    const YUrl = await Youtube.create(youtubeUrl);
    await YUrl.save();
    res.status(201).json({
      success: true,
      blog: YUrl,
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

//  get all Youtube Url
youtubeRouter.get("/youtube-links", async (req: Request, res: Response) => {
  try {
    const YUrl = await Youtube.find().limit(6);
    res.status(200).json({
      success: true,
    YUrl,
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


// Delete Blog 
youtubeRouter.delete("/facebook-link/:id", async (req: Request, res: Response) => {
  try {
    
    const id =req.params.id
    const YUrl = await Facebook.findByIdAndDelete(id);

     res.status(200).json({
      success: true,
   YUrl,
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