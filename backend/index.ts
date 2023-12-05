import express from "express";
import * as dotenv from 'dotenv'

import { Client, Pool } from "pg";
import { dbConfig } from "./db.config";

dotenv.config({path: __dirname + '/.env'})

const pool = new Pool(dbConfig);
const app = express();


async function getAllGames() {
  const result = await pool.query("SELECT * FROM games")
  return result.rows
}
async function getGameById(id:number){
  const result = await pool.query(`SELECT * FROM games WHERE id = ${id};`)
  return result.rows
}

app.get("/getAll", async (request, response, next) => {
  const result = await getAllGames();
  console.log(result)
  response.json(result);
});

app.get("/getById/:id", async (request, response)=>{
  const result = await getGameById(parseInt(request.params.id));
  console.log(result)
  response.json(result);
});

app.listen(process.env.PORT || 3000, function server(this: any){
  
  console.log("app runing", this.address().port, app.settings.env);
});
