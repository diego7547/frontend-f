import * as moment from "moment";


  export const  obtenerFechasLaborables=()=> {
    var hoy = new Date();
      var diaDeLaSemana = hoy.getDay();
      var diferenciaDias = 1 - diaDeLaSemana;
    
      // Calcula y almacena las fechas de lunes a viernes para la semana actual
      var fechasSemanaActual = [];
      for (var i = 0; i < 5; i++) {
        var fecha = new Date(hoy);
        fecha.setDate(hoy.getDate() + diferenciaDias + i);
        fechasSemanaActual.push(moment(fecha, 'YYYY-MM-DD').format('YYYY-MM-DD'));
      }
      console.log(fechasSemanaActual)
      return fechasSemanaActual;
    }

    
    export const  obtenerFechasLaborable=()=> {
      var hoy = new Date();
      var diaDeLaSemana = hoy.getDay();
      var diferenciaDias = 1 - diaDeLaSemana;
    
      // Calcula y almacena las fechas de lunes a viernes para la semana actual
      var fechasSemanaActual = [];
      for (var i = 0; i < 5; i++) {
        var fecha = new Date(hoy);
        fecha.setDate(hoy.getDate() + diferenciaDias + i);
        fechasSemanaActual.push(fecha.toLocaleDateString());
      }
    
      return fechasSemanaActual;
    }