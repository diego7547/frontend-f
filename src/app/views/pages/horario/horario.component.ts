import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import * as moment from 'moment';
import { Horario, diaSemanal } from 'src/app/core/models/horario';
import { HorarioService } from 'src/app/core/services/horario/horario.service';
import { modeloTabla } from 'src/app/core/utils/modeloForm';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.scss'],
})
export class HorarioComponent implements OnInit ,AfterViewInit{
  // lista de horario
  horarios:MatTableDataSource<any[]> = new MatTableDataSource();
  // columnas
  columnsHorario:modeloTabla[] = [
    {label:'Personal',dataKey:'nomPersonal',def:'nomPersonal'},
    {label:'Hora de inicio',dataKey:'hdiHorario',def:'hdiHorario'},
    {label:'Hora de salida',dataKey:'hdsHorario',def:'hdsHorario'},
    {label:'Dia de semana',dataKey:'dsHorario',def:'dsHorario'},
  ];
  rolesList = ['LUNES','MARTES','MIERCOLES','JUEVES','VIERNES','NINGUNO']
 

  tableDisplayColumns!:string[];
  isLoadingResults = false;

  formDataEdit: Horario = {
    idHorario: 0,
    dniPersonal: '',
    dsHorario: diaSemanal.LUNES,
    hdiHorario: '',
    hdsHorario: '',
    nomPersonal: '',
  };

  ShowModel!: boolean;

  // registrar o actualizar
  isUpdateOrInsert: boolean = true; // por defecto registra
  // model edit
  edit(data: Horario) {
    this.service.findOne(data.idHorario).subscribe({
      next: (res) => {
        this.formDataEdit.idHorario = res.idHorario;
        this.formDataEdit.dsHorario = res.dsHorario;
        this.formDataEdit.dniPersonal = res.dniPersonal;
        this.formDataEdit.hdiHorario = res.hdiHorario;
        this.formDataEdit.hdsHorario = res.hdsHorario;
        this.formDataEdit.nomPersonal = res.nomPersonal;
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
    this.loaginHorario();
  }

  // volver al estado estandar
  initForm(data: Horario) {
    this.formDataEdit = data;
  }

  constructor(private service: HorarioService) {
    this.service.findAll().subscribe({
      next: (res) => {
        
        this.tableDisplayColumns = this.columnsHorario.map(columns => columns.def);
        this.tableDisplayColumns.push('actions');
        this.horarios = new MatTableDataSource(this.isLoading(res));
        
          this.horarios.paginator = this.paginator;
          this.isLoadingResults = true;
        
        
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngAfterViewInit(): void {
    this.service.findAll().subscribe({
      next: (res) => {

        
        this.tableDisplayColumns = this.columnsHorario.map(columns => columns.def);
        this.tableDisplayColumns.push('actions');
        this.horarios = new MatTableDataSource(this.isLoading(res));
        
          this.horarios.paginator = this.paginator;
          this.isLoadingResults = true;
          console.log(this.paginator);
        
        
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator ;

  ngOnInit(): void {
    this.service.findAll().subscribe({
      next: (res) => {
        
        this.tableDisplayColumns = this.columnsHorario.map(columns => columns.def);
        this.tableDisplayColumns.push('actions');
        this.horarios = new MatTableDataSource(this.isLoading(res));
       
          this.horarios.paginator = this.paginator;
          this.isLoadingResults = true;
        
        
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  isLoading(data:Horario[]):any[]{
    return data.map((horario)=>({
      ...horario,
      hdiHorario:moment(horario.hdiHorario,  'h:mm:ss a').format('h:mm:ss a'),
      hdsHorario:moment(horario.hdsHorario,  'h:mm:ss a').format('h:mm:ss a')
    }))
  }


  eliminar(data:Horario){
    Swal.fire({
      title: "Seguro que lo quieres eliminar ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sì, deseo eliminarlo"
    }).then((result) => {
      
      if (result.isConfirmed) {
        
        this.service.delete(data.idHorario).subscribe({
          next:res=> {
            Swal.fire({
              title: `El horario se elimino con exito !`,
              icon: "success"
            });
            this.loaginHorario();
          },
          error:err =>{console.log(err)}
        })
       
        
      }
     
    });
  }

 
  loaginHorario(){
    this.service.findAll().subscribe({
      next: (res) => {
        this.tableDisplayColumns = this.columnsHorario.map(columns => columns.def);
        this.tableDisplayColumns.push('actions');
        this.horarios = new MatTableDataSource(this.isLoading(res));
        this.horarios.paginator = this.paginator;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }


  // filtro de tabla => filtro por dia semanal
  filtroPorDia(event: any) {
    if(event === "NINGUNO"){
    this.horarios.filter = "";
    }else if (event.length > 0){
      this.horarios.filter = event;
    }else{
      this.horarios.filter = "";
    }
  }

  // filtro de tabla => filtro por dni del personal 
  filtroPorDni(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.horarios.filter = filterValue.trim().toLowerCase();
  }

  

 
}
