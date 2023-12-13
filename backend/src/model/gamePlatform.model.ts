import IGamePlatformDTO from "../dtos/gamesPlatforms.dto"
import IGamePlatform from "../dtos/gamesPlatforms.dto"
import { IDataBase } from "../infra/mysql"


interface IGamesPlatformModel {
  (dataBase: IDataBase): {
    getById(id: number, filter?: string): Promise<IGamePlatform[]|undefined>
    getAll(filter?: string): Promise<IGamePlatform[]> 
    create(): unknown
    updateById(): unknown
    removeById(): unknown
  }
}

const GamesPlatformModel:IGamesPlatformModel = (dataBase) => ({ 
  async getAll(filter = ''){
    const result = await dataBase.select<IGamePlatformDTO>('*', 'games_platforms', ` INNER JOIN platforms on platforms.idPlatform = games_platforms.idPlatform ${filter}`) 
    return result
  },
  async getById(id, filter = ''){
    const result = await dataBase.select<IGamePlatformDTO>('*', 'games_platforms', ` INNER JOIN platforms on platforms.idPlatform = games_platforms.idPlatform WHERE games_platforms.idGame = ${id} ${filter}`)
    return result
  },
  create(){
    
  },
  removeById() {
    
  },
  updateById() {
    
  },
})

export default GamesPlatformModel