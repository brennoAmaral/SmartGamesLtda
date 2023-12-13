import { Request, Response } from "express";
import * as yup from "yup"
import {  IRequestGetByIdDTO,  } from "../../dtos/generics.dto";
import { ISellsRequest } from "../../dtos/sellsStores.dto";
import { StorageController } from "../storage";
import SellsStoresModel from "../../model/sellsStores.model";
import dataBaseEngine from "../../infra/mysql";
import randomKeys from "./randomKeys";
import GlobalSellsModel from "../../model/globalSells.model";
import GlobalSells_SellsStoresModel from "../../model/globalSells_sellsStores.model";
import DomainValidate from "../../domain/games.domain";

export async function createSell(request: Request<ISellsRequest>, response: Response<any | yup.ValidationError['message']>) {
  const params = request.params
  const validateParams = await DomainValidate.paramsCreateSell(params)
  if(validateParams){
    response.status(400).json(validateParams)
    return
  }


  const {discount, price, quantity} = request.params
  const storageRespose = await StorageController.managementStorage(request, response)
  if(storageRespose){
    response.status(500).json(storageRespose)
    return
  }
 
  const idISellStore = await SellsStoresModel(dataBaseEngine).create(params).then((item)=> item?.insertId)
  if(!idISellStore){
    response.status(500).json(idISellStore)
    return
  }
  const totalValue = price * quantity
  const idGlobalSell = await GlobalSellsModel(dataBaseEngine).create({...params, sellCode: randomKeys(), totalValue: totalValue, discount: discount}).then((item)=> item?.insertId)
  if(!idGlobalSell){
    response.status(500).json(idGlobalSell)
    return
  }

  if(idGlobalSell && idISellStore){
    const result = await GlobalSells_SellsStoresModel(dataBaseEngine).create(idGlobalSell, idISellStore)
    if(result?.insertId && params.shipMethod === 'atStore'){
      const globalSell = await GlobalSellsModel(dataBaseEngine).getById(result.insertId)
        response.status(200).json(globalSell?.sellCode)
        return 
    }
    response.status(200).json('sell successfuly')
    return
  }else{
    response.status(500).json({error: ['keys not found']})
    return
  }
}



export async function getGameById(request: Request<IRequestGetByIdDTO>, response: Response<any | yup.ValidationError['message']>) {
  
}

