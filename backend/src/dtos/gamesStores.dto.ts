import IGameDTO from "./games.dto";
import IStoresDTO from "./stores.dto";

export default interface IGamesStoresDTO extends IGameDTO, IStoresDTO{
  quantity: number,
  idGameStore: number
  price: number
}

export interface IGamesStoreResponseDTO extends Omit<IGamesStoresDTO, 'idGame'|'nameGame'|'description'|'linkImage' | 'idGameStore'>{}