
import express, { Request, Response } from 'express';
import {  Image } from '../../models/url.models';

export const ImageRouter =express.Router()

// create a Image url
ImageRouter.post("/create-image-link", async (req: Request, res: Response) => {
  try {
    const imageUrl = req.body;
    console.log(imageUrl);
    const url = await Image.create(imageUrl);
    await url.save();
    res.status(201).json({
      success: true,
      blog: url,
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

//  get all Image
ImageRouter.get("/image-links", async (req: Request, res: Response) => {
  try {
    const images = await Image.find();
    res.status(200).json({
      success: true,
      images,
      message: "Get all Images",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});


// Delete Image
ImageRouter.delete("/image-link/:id", async (req: Request, res: Response) => {
  try {
    
    const id =req.params.id
    const image= await Image.findByIdAndDelete(id);

     res.status(200).json({
      success: true,
      image,
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