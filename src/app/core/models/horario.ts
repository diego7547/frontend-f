export interface Horario {
    idHorario:number,
    hdiHorario :string,
    hdsHorario:string,
    dniPersonal:string,
    dsHorario:diaSemanal,
    nomPersonal:string
}

export  enum diaSemanal{
    LUNES,
    MARTES,
    MIERCOLES,
    JUEVES,
    VIERNES
    
}