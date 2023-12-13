import { Schema, number, object, ref, string } from 'yup'
import { ISellsRequest,  } from '../../dtos/sellsStores.dto'

export const sellRequestSchema: Schema<ISellsRequest> = object({
  idGame: number().min(1).required(),
  idStore: number().min(1).required(),
  idPlatform: number().min(1).required(),
  quantity: number().min(1).required(),
  price: number().min(1).required(),
  discount: number().min(0).required().test('discount validate', 'discount cant be greater than price', (discount, context)=>{
    const {price} = context.parent as ISellsRequest
    return price > discount
  }),
  shipMethod:  string().oneOf(['atHome', 'atStore']).required()
})


