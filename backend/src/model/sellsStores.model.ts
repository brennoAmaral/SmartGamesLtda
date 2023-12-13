import { IDataBase } from "../infra/mysql"
import { ISellsRequest } from "../dtos/sellsStores.dto"
import { IInsertDTO } from "../dtos/generics.dto"


interface ISellStoresModel {
  (dataBase: IDataBase): {
    create(sellsParams: ISellsRequest): Promise<undefined | IInsertDTO>
    updateById(): unknown
    removeById(): unknown
  }
}

const SellsStoresModel:ISellStoresModel = (dataBase) => ({ 
  async create(sellsParams){
    const {idGame, idStore, price, quantity} = sellsParams
    const fields = 'idStore, idGame, priceSellStore, quantitySellStore'
    const insertData = await dataBase.insert('sells_stores', fields, `${idGame}, ${idStore}, ${price}, ${quantity}`)
    return insertData
  },
  removeById() {
    
  },
  updateById() {
    
  },
})

export default SellsStoresModel