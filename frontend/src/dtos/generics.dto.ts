export interface IRequestGetByIdDTO {
  id: number
}

export interface IRequestFilterDTO {
  filter: string
}

export interface IInsertDTO {
    fieldCount: number,
    affectedRows: number,
    insertId: number,
    info: string,
    serverStatus: number,
    warningStatus: number,
    changedRows: number
}