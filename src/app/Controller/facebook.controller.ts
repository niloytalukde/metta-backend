
import express, { Request, Response } from 'express';
import { Facebook } from '../../models/url.models';

export const facebookRouter =express.Router()

// create a Facebook Link
facebookRouter.post("/create-facebook-link", async (req: Request, res: Response) => {
  try {
    const facebookUrl = req.body;
    const Furl = await Facebook.create(facebookUrl);
    await Furl.save();
    res.status(201).json({
      success: true,
      blog: Furl,
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

//  get all Facebook url
facebookRouter.get("/facebook-links", async (req: Request, res: Response) => {
  try {
    const Furl = await Facebook.find();
    res.status(200).json({
      success: true,
     Furl,
      message: "Get all Facebook url",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

// Delete Facebook link
facebookRouter.delete("/facebook-link/:id", async (req: Request, res: Response) => {
  try {
    const id =req.params.id
    const Furl = await Facebook.findByIdAndDelete(id);
     res.status(200).json({
      success: true,
      Furl,
      message: "Url Deleted Successful",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});