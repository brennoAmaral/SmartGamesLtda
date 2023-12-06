import express from "express";
import dotenv from "dotenv"
import { Client, Pool } from "pg";
import { dbConfig } from "./db.config";
import ApiGames from "./src/services/games";

dotenv.config();

const app = express();

app.get("/games/getListAll", async (request, response, next) => {
  const result = await ApiGames.getListAll();
  response.json(result);
});

app.get("/getById/:id", async (request, response)=>{
  const result = await ApiGames.getGameById(parseInt(request.params.id));
  response.json(result);
});

app.listen(process.env.PORT || 3000, function server(this: any){
  console.log("app runing", this.address().port, app.settings.env);
});
