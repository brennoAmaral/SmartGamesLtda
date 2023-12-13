export default interface IGlobalSellsDTO{
  idGlobalSell: number,
  sellCode: string,
  shipMethod: 'atHome' | 'atStore'
  discount: number,
  totalValue: number,
}

export interface IGlobalSellInsertDTO extends Omit<IGlobalSellsDTO, 'idGlobalSell'>{

}