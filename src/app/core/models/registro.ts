export interface Registro{
    idRegistro:number,
    fcRegistro:Date,
    hdeRegistro:string,
    hdsRegistro:string,
    estRegistro:Estado,
    dniPersonal:string,
    obsRegistro:string
}

enum Estado{
    FALTO,
    PRESENTE,
    FINALIZO,

}