
import { IDataBase } from "../infra/mysql"
import IGamesStoresDTO, { IGamesStoreResponseDTO } from "../dtos/gamesStores.dto"
import { ISellStoreRequestDTO, ISellsRequest } from "../dtos/sellsStores.dto"
import { IInsertDTO } from "../dtos/generics.dto"



interface IGamesStoresModel {
  (dataBase: IDataBase): {
    getById(id: number, filter?: string): Promise<IGamesStoreResponseDTO[]|undefined>
    getAll(filters?: string): Promise<IGamesStoreResponseDTO[]> 
    getCheckStorage(params: ISellsRequest): Promise<ISellStoreRequestDTO[]>
    create(): unknown
    updateById(id:number, values:string, params: Omit<ISellStoreRequestDTO, 'idGame'>): Promise< undefined | IInsertDTO>
    removeById(): unknown
  }
}

const GamesStoresModel:IGamesStoresModel = (dataBase) => ({ 
  async getAll(filter = ''){
   const result  = await dataBase.select<IGamesStoresDTO>('*', 'games_stores', `INNER JOIN stores ON stores.idStore = games_stores.idStore ${filter}`)
   return result.map((storage)=>{
    const {adress, quantity, price, nameStore, linkMap, idStore} = storage
    return{
      adress,
      quantity,
      price,
      nameStore,
      linkMap,
      idStore
    }
   })
  },
  async getById(id, filter = ''){
    const result  = await dataBase.select<IGamesStoresDTO>('*', 'games_stores', `INNER JOIN stores ON stores.idStore = games_stores.idStore WHERE games_stores.idGame = ${id} )`)
    return result.map((storage)=>{
      const {adress, quantity, price, nameStore, linkMap, idStore} = storage
      return{
        adress,
        quantity,
        price,
        nameStore,
        linkMap,
        idStore
      }
     })
  },
  async getCheckStorage(params){
    const {idGame,idPlatform, idStore,quantity, price} = params
    const result = await dataBase.select<ISellStoreRequestDTO>('*', 'games_stores',`INNER JOIN games_platforms ON  games_platforms.idGame = games_stores.idGame WHERE games_stores.idGame = ${idGame}  AND games_stores.idStore = ${idStore}  AND games_platforms.idPlatform = ${idPlatform} AND games_stores.quantity >= ${quantity} AND games_stores.price = ${price}`)
    return result
  },
  create(){
    
  },
  removeById() {
    
  },
   async updateById(id, values, params) {
    const { idPlatform, idStore, price, quantity} = params
    const optionsAfterSet = 'inner join games_platforms on games_platforms.idGame = games_stores.idGame'
    const optionsBeforeSet = `AND games_stores.idStore = ${idStore}  AND games_platforms.idPlatform = ${idPlatform} AND games_stores.quantity >= ${quantity} AND games_stores.price = ${price}`
      const resultInsert = await dataBase.update('games_stores', values, id, 'idGame', optionsAfterSet, optionsBeforeSet )
      return resultInsert
  },
})

export default GamesStoresModel