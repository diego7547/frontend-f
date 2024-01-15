import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Personal, Rol } from 'src/app/core/models/personal';
import { PersonalService } from 'src/app/core/services/personal/personal.service';
import * as moment from 'moment';
import { modeloTabla } from 'src/app/core/utils/modeloForm';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { panelAfirmacion } from 'src/app/core/utils/panelMensage';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit, AfterViewInit {
  rolesList =['DIRECTOR',"ADMINISTRACION","DOCENTE","AUXILIAR","BIBLIOTECARIO",'NINGUNO'];
  personales : MatTableDataSource<any[]> = new MatTableDataSource();
  
  isLoadingResults = false;


  tableDisplayColumns!:string[];
  columnsPersonal:modeloTabla []=[
    {label:'Nombre',dataKey:'nomPersonal',def:'nomPersonal'},
    {label:'Apellido',dataKey:'apePersonal',def:'apePersonal'},
    {label:'Fecha Nacimiento',dataKey:'fnacPersonal',def:'fnacPersonal'},
    {label:'Direccion',dataKey:'direcPersonal',def:'direcPersonal'},
    {label:'Rol',dataKey:'rolPersonal',def:'rolPersonal'},
  ];

 

  formDataEdit:Personal = {
    dniPersonal:'',
    nomPersonal:'',
    apePersonal:'',
    direcPersonal:'',
    telPersonal:'',
    fnacPersonal:'',
    rolPersonal:Rol.DOCENTE
  }
  ShowModel!:boolean;
  
  
  // registrar o actualizar 
  isUpdateOrInsert:boolean = true; // por defecto registra
  // model edit
  edit(data:Personal){
    
   this.service.findOne(data.dniPersonal).subscribe({
    next:(res) => {
      this.formDataEdit.dniPersonal = res.dniPersonal;
      this.formDataEdit.nomPersonal = res.nomPersonal;
      this.formDataEdit.apePersonal = res.apePersonal;
      this.formDataEdit.direcPersonal = res.direcPersonal;
      this.formDataEdit.telPersonal = res.telPersonal;
      this.formDataEdit.fnacPersonal = res.fnacPersonal.slice(0,10);
      this.formDataEdit.rolPersonal = res.rolPersonal;
      this.ShowModel=true;
      this.isUpdateOrInsert =false;
      
    }
   });
    
  
    
  }

  // estado del model edit 
  isShowModel(data:boolean){
    this.ShowModel =data;
    this.isUpdateOrInsert =true;
    this.loadingPersonal();
  }

  // volver al estado estandar
  initForm(data:Personal){
    this.formDataEdit= data;
  }

  constructor(private service:PersonalService){
   
  }
  ngAfterViewInit(): void {
    this.service.findAll().subscribe({
      next:(res) =>{
        const resNew = res.map(a => {
          return {
            ...a,
            fnacPersonal:a['fnacPersonal'].slice(0,10)
          }
        });

        this.tableDisplayColumns = this.columnsPersonal.map(columns => columns.def);
        this.tableDisplayColumns.push('actions');
        this.personales = new MatTableDataSource(this.isLoading(resNew));
        this.personales.paginator = this.paginator;
        this.isLoadingResults = true;
      },error:(err)=>{console.log(err)}
    })
  }

  
 
   @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.service.findAll().subscribe({
      next:(res) =>{
        const resNew = res.map(a => {
          return {
            ...a,
            fnacPersonal:a['fnacPersonal'].slice(0,10)
          }
        });

        this.tableDisplayColumns = this.columnsPersonal.map(columns => columns.def);
        this.tableDisplayColumns.push('actions');
        this.personales = new MatTableDataSource(this.isLoading(resNew));
        this.personales.paginator = this.paginator;
        this.isLoadingResults = true;
      },error:(err)=>{console.log(err)}
    })
  }

  isLoading(data:Personal[]):any[]{
   return  data.map((personal) => ({
    ...personal,
    fnacPersonal:moment(personal.fnacPersonal, 'YYYY-MM-DD').format('YYYY-MM-DD')
   }));
  }
 


 eliminar(data:Personal){
  Swal.fire({
    title: "Seguro que lo quieres eliminar ?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sì, deseo eliminarlo"
  }).then((result) => {
    
    if (result.isConfirmed) {
      this.service.delete(data.dniPersonal).subscribe({
        
        next:res => {
          
          Swal.fire({
            title: `El personal se elimino con exito !`,
            icon: "success"
          });
          this.loadingPersonal();
        },error:err => console.log(err)})
    }
   
  });
  }

  loadingPersonal(){
    this.service.findAll().subscribe({
      next:(res) =>{
        const resNew = res.map(a => {
          return {
            ...a,
            fnacPersonal:a['fnacPersonal'].slice(0,10)
          }
        });

        this.tableDisplayColumns = this.columnsPersonal.map(columns => columns.def);
        this.tableDisplayColumns.push('actions')
        this.personales = new MatTableDataSource(this.isLoading(resNew));
        this.personales.paginator = this.paginator;
        this.isLoadingResults = true;
      },error:(err)=>{console.log(err)}
    })
  }

 
  filterDay(event :any):void{
  
   if(event === "NINGUNO"){
    this.personales.filter = "";

  }else if(event.length > 0){ 
    this.personales.filter = event;
  }
  else{
    this.personales.filter = "";
  }
}

  filterDni(event :any){
    const filterValue = (event.target as HTMLInputElement).value;
    this.personales.filter = filterValue.trim().toLowerCase();
  }

}
