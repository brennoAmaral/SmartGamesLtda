import IGameDTO from "./games.dto";
import IGamePlatformDTO from "./gamesPlatforms.dto";
import IGamesStoresDTO from "./gamesStores.dto";
import IGlobalSellsDTO from "./globalSells.dto";
import IPlatformDTO from "./platforms.dto";
import IStoresDTO from "./stores.dto";

export default interface ISellsStoresDTO extends IStoresDTO, IGameDTO{
quantity: number
price: number
idISellStore: number,
}

export interface ISellStoreRequestDTO extends Pick<IGamesStoresDTO, 'idStore'|'idGame'|'quantity'|'price'>, Pick<IGamePlatformDTO, 'idPlatform'>{

}

export interface ISellsRequest extends Pick<ISellsStoresDTO, 'idGame' | 'quantity' | 'idStore' >, Pick<IPlatformDTO, 'idPlatform'>, Pick<IGlobalSellsDTO, 'shipMethod'>{
  price: number
  discount: number
}