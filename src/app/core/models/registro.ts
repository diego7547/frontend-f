export interface Registro{
    idRegistro:number,
    fcRegistro:string,
    hdeRegistro:string,
    hdsRegistro:string,
    estRegistro:Estado,
    dniPersonal:string,
    obsRegistro:string,
    hdtRegistro:string
}

export enum Estado{
    FALTO,
    PRESENTE,
    FINALIZO,
    PERMISO
}