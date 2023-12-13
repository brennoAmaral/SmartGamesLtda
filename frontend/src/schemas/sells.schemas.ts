import { Schema, number, object, ref, string } from 'yup'
import { ISellsRequest } from '../dtos/sellsStores.dto'

export const sellRequestSchema = object({
  idGame: number().min(1),
  idStore: number().min(1).required(),
  idPlatform: number().min(1).required(),
  quantity: number().min(1),
  price: number().min(1),
  discount: number().min(0).test('discount validate', 'discount cant be greater than price', (discount, context)=>{
    if(discount){

      const {price} = context.parent as ISellsRequest
      return price > discount
    }
    return true
  }),
  shipMethod:  string().oneOf(['atHome', 'atStore']).required()
})


