import { IDataBase } from "../infra/mysql"
import IGlobalSellsDTO, { IGlobalSellInsertDTO } from "../dtos/globalSells.dto"
import { IInsertDTO } from "../dtos/generics.dto"


interface IGlobalSellsModel {
  (dataBase: IDataBase): {
    getById(idGlobalSell:number): Promise<IGlobalSellsDTO| undefined>
    getAll(): unknown
    create(paramsGlobalSells: IGlobalSellInsertDTO): Promise<undefined | IInsertDTO>
    updateById(): unknown
    removeById(): unknown
  }
}

const GlobalSellsModel:IGlobalSellsModel = (dataBase) => ({ 
  async getAll(){
   
  },
  
  async getById(idGlobalSell){
    const [globalSell] = await dataBase.select<IGlobalSellsDTO>('*', 'global_sells', `WHERE idGlobalSell = ${idGlobalSell}`) 
    return globalSell 
  },
  async create(paramsGlobalSells){
    const {discount, sellCode, shipMethod, totalValue, } = paramsGlobalSells
    const fields = 'sellCode, shipMethod, totalValue, discount'
    const insertData = await dataBase.insert('global_sells', fields, `'${sellCode}', '${shipMethod}', ${totalValue}, ${discount}`)
    return insertData
  },
  removeById() {
    
  },
  updateById() {
    
  },
})

export default GlobalSellsModel