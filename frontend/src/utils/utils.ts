import { cut } from "ionicons/icons"

function removeBar(text:string){
  return text.replace(/\/+/g, ' ')
}

function moneyBrMask(money:number){
  const convertedMoney = String(money)
  const length = convertedMoney.length
  const cents = convertedMoney.substring(length - 2, length)
  const mask = convertedMoney.slice(0,-2)+','+cents
  return `R$ ${mask}`
}

function stringShorter(text: string, endCutLenght: number){
  if(endCutLenght && text.length > endCutLenght && endCutLenght > 0){
    let cutText = text.substring(0, text.length - endCutLenght) 
      if(cutText.endsWith(' ')){
        cutText = cutText.substring(0, cutText.length -1)
      }
    return cutText+'...'
  }
  return text
}

const Utils = {
  removeBar,
  moneyBrMask,
  stringShorter
}


export default Utils