import {
  AfterViewInit,
  Component,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Estado, Registro } from 'src/app/core/models/registro';
import { RegistrosService } from 'src/app/core/services/registros/registros.service';
import * as moment from 'moment';
import { modeloTabla } from 'src/app/core/utils/modeloForm';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit , AfterViewInit {
  registros: MatTableDataSource<any[]> = new MatTableDataSource();

  tableDisplayColumns!: string[];
 
  filterDate: string = '';
  filterPersonal: string = '';
  isLoadingResults = false;
  columnsRegistros: modeloTabla[] = [
    { label: 'Fecha', dataKey: 'fcRegistro', def: 'fcRegistro' },
    { label: 'Hora de entrada', dataKey: 'hdeRegistro', def: 'hdeRegistro' },
    { label: 'Hora de salida', dataKey: 'hdsRegistro', def: 'hdsRegistro' },
    { label: 'Estado', dataKey: 'estRegistro', def: 'estRegistro' },
    { label: 'Personal', dataKey: 'nomPersonal', def: 'nomPersonal' },
    { label: 'Horas Tardanza', dataKey: 'hdtRegistro', def: 'hdtRegistro' },
    { label: 'Observaciones', dataKey: 'obsRegistro', def: 'obsRegistro' },
  ];

  formDataEdit: Registro = {
    idRegistro: 0,
    fcRegistro: '',
    hdeRegistro: '',
    hdsRegistro: '',
    estRegistro: Estado.FALTO,
    dniPersonal: '',
    obsRegistro: '',
    hdtRegistro: '',
  };

  ShowModel!: boolean;

  // registrar o actualizar
  isUpdateOrInsert: boolean = true; // por defecto registra

  // model edit
  edit(data: Registro) {
    this.service.findOne(data.idRegistro).subscribe({
      next: (res) => { 
        this.formDataEdit.idRegistro = res.idRegistro;
        this.formDataEdit.fcRegistro = res.fcRegistro.slice(0,10);
        this.formDataEdit.hdeRegistro = res.hdeRegistro;
        this.formDataEdit.hdsRegistro = res.hdsRegistro;
        this.formDataEdit.dniPersonal = res.dniPersonal;
        this.formDataEdit.obsRegistro = res.obsRegistro;
        this.formDataEdit.estRegistro = res.estRegistro;
        this.formDataEdit.hdtRegistro = res.hdtRegistro;
        this.ShowModel = true;
        this.isUpdateOrInsert = false;
      },
      error: (err) => console.log(err),
    });
  }

  // estado del model edit
  isShowModel(data: boolean) {
    this.ShowModel = data;
    // estado de la variable
    this.isUpdateOrInsert = true;
    this.loadingRegistro();
  }

  // volver al estado estandar
  initForm(data: Registro) {
    this.formDataEdit = data;
  }

  ngOnInit(): void {
    this.service.findAll().subscribe({
      next: (res) => {
        const newResp =  res['data'].filter(a => 
          {
            return {
              ...res,
              fcRegistro:a['fcRegistro'].slice(0,10)
            };
          }
          );
        
        this.tableDisplayColumns = this.columnsRegistros.map(
          (columns) => columns.def
        );
        this.tableDisplayColumns.push('actions');
        this.registros = new MatTableDataSource(this.isLoading(newResp));
        this.registros.paginator = this.paginator;
        this.isLoadingResults = true;
      },
      error: (err) => console.log(err),
    });
  }

  // configuracion de datos => cambiar los datos a uno estandar
  isLoading(data: Registro[]): any[] {
    
    return data.map((registros) =>({
      ...registros,
      hdeRegistro: moment(registros.hdeRegistro, 'h:mm:ss a').format(
        'h:mm:ss a'
      ),
      hdsRegistro: moment(registros.hdsRegistro, 'h:mm:ss a').format(
        'h:mm:ss a'
      ),
      fcRegistro: moment(registros.fcRegistro, 'YYYY-MM-DD').format(
        'YYYY-MM-DD'
      ),
     
 
    }) );
  }

  constructor(private service: RegistrosService) {
    this.service.findAll().subscribe({
      next: (res) => {
        console.log(this.registros.paginator);
        const newResp =  res['data'].filter(a => 
          {
            
            return {
              ...res,
              fcRegistro:a['fcRegistro'].slice(0,10)
            };
          }
          );
        
        this.tableDisplayColumns = this.columnsRegistros.map(
          (columns) => columns.def
        );
        this.tableDisplayColumns.push('actions');
        this.registros = new MatTableDataSource(this.isLoading(newResp));
        this.registros.paginator = this.paginator;
        this.isLoadingResults = true;
        console.log(this.registros.paginator);
        
      },
      error: (err) => console.log(err),
    });
  }
  ngAfterViewInit(): void {
    this.service.findAll().subscribe({
      next: (res) => {
        console.log(this.registros.paginator);
        const newResp =  res['data'].filter(a => 
          {
            
            return {
              ...res,
              fcRegistro:a['fcRegistro'].slice(0,10)
            };
          }
          );
        
        this.tableDisplayColumns = this.columnsRegistros.map(
          (columns) => columns.def
        );
        this.tableDisplayColumns.push('actions');
        this.registros = new MatTableDataSource(this.isLoading(newResp));
        this.registros.paginator = this.paginator;
        this.isLoadingResults = true;
        console.log(this.registros.paginator);

      },
      error: (err) => console.log(err),
    });
  }

  // paginacion
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  /// funcion eliminar registro
  eliminar(data: Registro) {
    Swal.fire({
      title: 'Seguro que lo quieres eliminar ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sì, deseo eliminarlo',
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.delete(data.idRegistro).subscribe({
          next: (res) => {
            Swal.fire({
              title: `El registro se elimino con exito !`,
              icon: 'success',
            });
            this.loadingRegistro();
          },
          error: (err) => {
            console.log(err);
          },
        });
      }
    });
  }

  // datos de la tabla
  loadingRegistro() {
    this.service.findAll().subscribe({
      next: (res) => {
        const newResp =  res['data'].filter(a => 
          {
            return {
              ...res,
              fcRegistro:a['fcRegistro'].slice(0,10)
            };
          }
          );
        this.tableDisplayColumns = this.columnsRegistros.map(
          (columns) => columns.def
        );
        this.tableDisplayColumns.push('actions');
        this.registros = new MatTableDataSource(this.isLoading(newResp));
        this.registros.paginator = this.paginator;
      },
      error: (err) => console.log(err),
    });
  }

  // FILTRO
  filterAll(event: any) {
    if((this.filterDate !== "" && this.filterDate !== null) && (this.filterPersonal !== "" && this.filterPersonal !== null)){
   }
  else  if(event instanceof KeyboardEvent){
      const filterValue = (event.target as HTMLInputElement).value;
      this.registros.filter = filterValue.trim().toLowerCase();
    }
    else if(event instanceof MatDatepickerInputEvent){
      if(event.value){
        const dia =  moment(event.value, 'YYYY-MM-DD').format('YYYY-MM-DD');
        this.registros.filter = dia;
      }else{
        this.registros.filter = "";
      }
    }
  }
}
