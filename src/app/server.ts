import { Server } from "http";
import app from "./app";
import mongoose from "mongoose";

let server: Server;
const port = 3000;
async function main() {
  try {
    // Connect Mongodb
    await mongoose.connect(
      "mongodb+srv://NoteApp:4LmlGoSh3LQZttua@cluster0.njtaw.mongodb.net/Metta-Dhaman-app?retryWrites=true&w=majority&appName=Cluster0"
    );
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
