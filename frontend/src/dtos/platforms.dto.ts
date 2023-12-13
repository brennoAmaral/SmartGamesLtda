export default interface IPlatformDTO{
  idGamePlatform: number
  idPlatform: number
  idGame: number
  namePlatform: string
}

export interface IPlatformsResponseDTO extends Pick<IPlatformDTO, 'namePlatform' | 'idPlatform' >
{}