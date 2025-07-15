import { model, Schema } from "mongoose";
import { BlogT } from "../app/Interfeces/Interfeces";
const blogSchema = new Schema<BlogT>({
  blogImage: {type:String,require:true},
  title: {type:String,require:true,trim:true},
  content: {type:String,require:true,trim:true},
  createdAt:{type:Date,default:Date.now},
  
  
});
export const Blog = model<BlogT>("Blog", blogSchema);
