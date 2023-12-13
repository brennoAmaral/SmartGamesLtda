import { IDataBase } from "../infra/mysql"
import { IInsertDTO } from "../dtos/generics.dto"


interface IGlobalSells_SellsStoresModel {
  (dataBase: IDataBase): {
    getById(): unknown
    getAll(): unknown
    create(idGlobalSell: number, idISellStore: number): Promise<IInsertDTO | undefined>
    updateById(): unknown
    removeById(): unknown
  }
}

const GlobalSells_SellsStoresModel:IGlobalSells_SellsStoresModel = (dataBase) => ({ 
  async getAll(){
   
  },
  
  async getById(){
    
  },
  async create(idGlobalSell, idISellStore){
    const fields = 'idGlobalSell, idSellStore'
    const insertData = await dataBase.insert('globalsells_sellsstores', fields, `${idGlobalSell}, ${idISellStore}`)
    return insertData
  },
  removeById() {
    
  },
  updateById() {
    
  },
})

export default GlobalSells_SellsStoresModel