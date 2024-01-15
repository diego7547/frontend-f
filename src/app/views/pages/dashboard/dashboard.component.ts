import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  ApexLegend,
  ApexFill
} from "ng-apexcharts";
import { RegistrosService } from 'src/app/core/services/registros/registros.service';

import { Estado, Registro } from 'src/app/core/models/registro';
import { DataSeriesBD } from './data';
import { obtenerFechasLaborables } from 'src/app/core/utils/dataGraficos';
import * as moment from 'moment';


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill;
};


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  implements AfterViewInit,OnInit{
  @ViewChild("chart") chart!: ChartComponent;
   chartOptions!: Partial<ChartOptions>;
  presentes:number[] = []
  dataTable:DataSeriesBD ={
    totalPresentes:[],
    totalFaltaron:[],
    totalPermisos:[],
    categories:[]
  }

  isLoadingResults = false;
  constructor(private service:RegistrosService) {
    
  }
  ngOnInit(): void {
   
    this.service.findAll().subscribe({
      next:({data})=> { 
     this.dataTable = this.isLoagin(data);
       
    this.chartOptions = {
      series: [
        {
          name: "ASISTIERON",
          data: this.dataTable.totalPresentes
        },
        {
          name: "PERMISOS",
          data: this.dataTable.totalPermisos
        },
        {
          name: "FALTARON",
          data: this.dataTable.totalFaltaron
        }
      ],
      chart: {
        type: "bar",
        height: 350,
        width: 1000, 
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      xaxis: {
        type: "category",
        categories: obtenerFechasLaborables()
      },
      legend: {
        position: "right",
        offsetY: 40
      },
      fill: {
        opacity: 1
      }
    };
    this.isLoadingResults = true;
    },
      error:err=> console.log(err)
    });   

    
  }



  ngAfterViewInit(): void {
    }

  isLoagin(data:Registro[]):DataSeriesBD{
    
    let categories = obtenerFechasLaborables();  
   let totalPresentes:number[] = [];
   let totalPermisos:number[] = [];
   let totalFaltaron:number[] = [];
    let presentes = 0;
    let faltaron = 0;
    let permisos = 0;
    
    categories.forEach(fechaSemanal => {
       data.map(registro =>{
       let fecha = moment(registro.fcRegistro, 'YYYY-MM-DD').format('YYYY-MM-DD');
       
        if(fecha === fechaSemanal){
          if(registro.estRegistro.toString() === 'PRESENTE' ||  registro.estRegistro.toString() === 'FINALIZO'){
            presentes++;
          }else if(registro.estRegistro.toString() === 'FALTO' ){
            faltaron ++;
          }else if(registro.estRegistro.toString() === 'PERMISO' ){
            permisos ++;
          }
        }
     
     })
     totalPresentes.push(presentes);
     totalPermisos.push(permisos);
     totalFaltaron.push(faltaron);
    
     faltaron = 0;
     permisos = 0;
     presentes = 0;
    });
    
    return {
      totalPresentes,
      totalPermisos,
      totalFaltaron,
      categories
    }
  }
}