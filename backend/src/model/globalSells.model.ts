import { IDataBase } from "../infra/mysql"
import { IGlobalSellInsertDTO } from "../dtos/globalSells.dto"
import { IInsertDTO } from "../dtos/generics.dto"


interface IGlobalSellsModel {
  (dataBase: IDataBase): {
    getById(): unknown
    getAll(): unknown
    create(paramsGlobalSells: IGlobalSellInsertDTO): Promise<undefined | IInsertDTO>
    updateById(): unknown
    removeById(): unknown
  }
}

const GlobalSellsModel:IGlobalSellsModel = (dataBase) => ({ 
  async getAll(){
   
  },
  
  async getById(){
    
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