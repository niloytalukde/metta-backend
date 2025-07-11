import { model, Schema } from "mongoose";

const facebookModel=new Schema({
    facebookUrl:String
})

export const Facebook=model("Facebook",facebookModel)

const youtubeModel=new Schema({
    youtubeUrl:String
})

export const Youtube=model("Youtube",youtubeModel)

const imageModel=new Schema({
    facebookUrl:String
})

export const Image=model("Image",imageModel)

