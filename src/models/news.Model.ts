import { model, Schema } from "mongoose";
import { NEWS } from "../app/Interfeces/Interfeces";

const newsSchema = new Schema<NEWS>({
newsImage: {type:String,require:true},
  title: {type:String,require:true,trim:true},
  content: {type:String,require:true,trim:true},
  createdAt:{type:Date,default:Date.now},
  
  
});
export const News= model<NEWS>("News", newsSchema);
