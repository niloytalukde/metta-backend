import { Server } from "http";

import mongoose from "mongoose";
import app from "./app";

let server: Server;
const port = process.env.PORT ||3000;
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
      console.log("Server is running");
    });
  } catch (error) {
    console.log(error);
  }
}

main();

// 4LmlGoSh3LQZttua
// NoteApp
