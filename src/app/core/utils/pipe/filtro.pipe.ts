import { Pipe, PipeTransform, inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  data!:MatTableDataSource<any[]>;

  transform(lista:any):any  {
    this.data = new MatTableDataSource();
     console.log(lista)
    return lista;
    }
}
