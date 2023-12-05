import express from "express";
import dotenv from "dotenv";
import { Client, Pool } from "pg";
import { dbConfig } from "./db.config";

dotenv.config();

const pool = new Pool(dbConfig);
const app = express();

// const client = new Client({
//   connectionString:
//     "postgres://qxpwprjdzmpcha:cd967c7d5a840ede15950370ea6449cf8ce22371e3e775d77c4fd1d80ed0e712:5432/ddq2qsdtua5ufb",
//   ssl: { rejectUnauthorized: false },
// });

// client.connect();

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
