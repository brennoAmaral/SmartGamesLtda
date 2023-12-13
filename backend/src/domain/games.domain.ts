import { ValidationError, Schema } from 'yup'
import { Request, Response } from "express";
import { Schemas } from './schemas';
import { IRequestGetByIdDTO } from '../dtos/generics.dto';
import { ISellsRequest } from '../dtos/sellsStores.dto';

export type IDefaultResponse <R> = Response<R | ValidationError>

function errorsContruct (error:unknown): {errors:ValidationError['errors']}{
      const yupError = error as ValidationError
      return {errors: yupError.errors}
}

const DomainValidate = {
  async getAll<R>(resultQuery: R[], schemaYupResult: Schema<R[]>){
    try{
      await schemaYupResult.validate(resultQuery,  {abortEarly: false})
    }catch(error){
      return errorsContruct(error as ValidationError)
    }
  },
  async id(params: Request<IRequestGetByIdDTO>['params']){
    try{
      await Schemas.idValidation.validate(params)
    }catch(error){
      return  errorsContruct(error)
    }
  },
  async gameGetByIdResponse<R>( resultQuery: R|undefined){
    try{
      await  Schemas.gameValidation.validate(resultQuery)
    }catch(error){
      return errorsContruct(error)
    }
  },
  async paramsCreateSell(params: Request<ISellsRequest>['params']): Promise<undefined|{errors:ValidationError['errors']}>{
    try{
      await Schemas.sellRequestSchema.validate(params)

    }catch(error){
      return errorsContruct(error)
    }
  }
  }
export default DomainValidate