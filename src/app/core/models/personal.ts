export interface Personal {
    dniPersonal:string,
    nomPersonal:string,
    apePersonal:string,
    direcPersonal:string,
    telPersonal:string,
    fnacPersonal:Date,
    rolPersonal:Rol
}

enum Rol{
    DIRECTOR,
    ADMINISTRACION,
    DOCENTE,

}