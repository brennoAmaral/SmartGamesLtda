import { error } from "console";
import { Pool } from "pg"
import { dbConfig } from "../../db.config";

const pool = new Pool(dbConfig);

async function getListAll() {

  const query = "SELECT * FROM games";
  
  try{
  
    const result = await pool.query(query)
    return result.rows
  
  }catch(error:any){
  
    console.log(error);
    return error
  
  }
}
async function getGameById(id:number){

  const query = `SELECT * FROM games WHERE id = ${id};`;
  
  try{
  
    const result = await pool.query(query)
    return result.rows
  
  }catch(error:any){
  
    console.log(error);
    return error
  
  }
  
}

const ApiGames = {
  getListAll,
  getGameById
}

export default ApiGames