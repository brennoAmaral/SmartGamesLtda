import IGameDTO from "./games.dto";
import  { IGamesStoreResponseDTO } from "./gamesStores.dto";
import  { IPlatformsResponseDTO } from "./platforms.dto";




export default interface IGamesResponseDTO extends IGameDTO{
  platforms: IPlatformsResponseDTO[]
  stores: IGamesStoreResponseDTO[]
}