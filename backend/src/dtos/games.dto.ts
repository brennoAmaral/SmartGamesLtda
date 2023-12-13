import IGamePlatformDTO from "./gamesPlatforms.dto"
import IPlatformDTO from "./platforms.dto"

export default interface IGameDTO{
  idGame :number
  nameGame :string
  description: string
  linkImage: string
}