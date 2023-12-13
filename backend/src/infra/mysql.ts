import mysql from "mysql2"
import { IInsertDTO } from "../dtos/generics.dto";


const dataBase = mysql.createPool({
  user: 'root',
  host: 'localhost',
  database: 'SmartGamesDb',
  password: 'sqlpass',
  port: 3306
}).promise();

const dataBaseEngine = {
  delete() {

  },
  async insert(table: string, fields:string, values:string, options: string = ''): Promise<IInsertDTO> {
   const [result] = await dataBase.query(`INSERT INTO ${table} (${fields}) VALUES (${values}) ${options};`)
   return result as unknown as IInsertDTO
  },
  async update(table: string, values:string, id:number, campoIdName: string,  optionsBeforeSet: string = '', optionsAfterSet=''):Promise< undefined | IInsertDTO> {
    const [result] = await dataBase.execute(`UPDATE ${table} ${optionsBeforeSet} SET ${values} WHERE ${table}.${campoIdName} = ${id} ${optionsAfterSet};`)
    return result as IInsertDTO
  },
  async select <R> (fields: string, table: string, options: string = ''):Promise<R[]> {
    const [rows] = await dataBase.execute(`SELECT ${fields} FROM ${table} ${options}`)
    console.log(rows)
    return rows as unknown as R[]
  },
  mysql:{...dataBase}
}

export type IDataBase = typeof dataBaseEngine 

export default dataBaseEngine
