import IGameDTO from "../dtos/games.dto"
import IGamesResponseDTO from "../dtos/gameResponse.dto"
import { IPlatformsResponseDTO } from "../dtos/platforms.dto"
import  { IDataBase } from "../infra/mysql"
import GamesPlatformModel from "./gamePlatform.model"
import GamesStoresModel from "./gamesStores.model"
import { IGamesStoreResponseDTO } from "../dtos/gamesStores.dto"

interface IGamesModel {
  (dataBase: IDataBase): {
    getById(id: number, filter?: string): Promise<IGamesResponseDTO|undefined>
    getAll(filter?: string): Promise<IGamesResponseDTO[]> 
    withPlatforms(idGame: number, filter?: string): Promise<IPlatformsResponseDTO[]>
    withStores(idGame: number, filter?: string): Promise<IGamesStoreResponseDTO[]>
    create(): unknown
    updateById(): unknown
    removeById(): unknown
  }
}

const GamesModel:IGamesModel = (dataBase) => ({ 
  async getAll(filter = ''){
    console.log(filter)
    const filterFomater = filter !== ':filter' || filter !== undefined ? ` WHERE nameGame LIKE '%${filter}%'`: ''
    const gameList = await dataBase.select<IGameDTO>('*', 'games', `${filterFomater}`)
    const gamesPlatform: IGamesResponseDTO[] = []
    
    for(let i=0; i<gameList.length; i++){
      gamesPlatform.push({...gameList[i],
        platforms: await GamesModel(dataBase).withPlatforms(gameList[i].idGame, filter),
        stores: await GamesModel(dataBase).withStores(gameList[i].idGame, filter)
        } as IGamesResponseDTO)
    }
  
    return gamesPlatform
  },
  
  async getById(id, filter = ''){
    const [result] = await dataBase.select<IGameDTO>('*', 'games', `WHERE idGame = ${id}`)
   
    return {
      ...result,
      platforms: await GamesModel(dataBase).withPlatforms(result.idGame),
      stores: await GamesModel(dataBase).withStores(result.idGame)
    } as IGamesResponseDTO
  },
  async withPlatforms(idGame, filter = ''){
    const result = await GamesPlatformModel(dataBase).getAll(`WHERE games_platforms.idGame = ${idGame} `) 
    return result.map((query)=>({
       idPlatform: query.idPlatform,
       namePlatform: query.namePlatform
    }))
  },
  async withStores(idGame, filter = ''){
    const result = await GamesStoresModel(dataBase).getAll(`WHERE games_stores.idGame = ${idGame} `)
    return result
  },
  // async withPrice(igGame){
  //   const result await G
  // },
  create(){
    
  },
  removeById() {
    
  },
  updateById() {
    
  },
})

export default GamesModel