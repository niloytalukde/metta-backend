import { Server } from "http";
import app from "./app";
import mongoose from "mongoose";

let server: Server;
const port = 3000;
async function main() {
  try {
    // Connect Mongodb
     const mongoUri = process.env.MONGODBURI;

  if (!mongoUri) {
    throw new Error('MONGODBURI not set in .env');
  }

  await mongoose.connect(mongoUri);

    console.log("Connected MongoDB!!!");
    server = app.listen(port, () => {
      console.log("Server listen on 3000");
    });
  } catch (error) {
    console.log(error);
  }
}

main();

// 4LmlGoSh3LQZttua
// NoteApp
