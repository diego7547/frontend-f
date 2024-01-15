export interface modeloTabla{
    label:string,
    def:string,
    dataKey:string
}

export interface tableAction{
    action:ACTION
}

export interface tableConfig{
showAction?:boolean
}

enum ACTION {
EDIT,
DELETE
}