import express from "express";
import dotenv from "dotenv"
import cors from "cors";
import router from "./routes/router";
dotenv.config();

const app = express();

app.use(cors())

app.use(router)

app.listen(3000, function server(this: any){
  console.log("backend runing", this.address().port);
});
