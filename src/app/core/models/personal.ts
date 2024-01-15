export interface Personal {
    dniPersonal:string,
    nomPersonal:string,
    apePersonal:string,
    direcPersonal:string,
    telPersonal:string,
    fnacPersonal:string,
    rolPersonal:Rol
}

export enum Rol{
    DIRECTOR,
    ADMINISTRACION,
    DOCENTE,

}