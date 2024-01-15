import Swal from 'sweetalert2';
 
 
 // muestar un mensaje exitoso
 export const panelConfirmacion=(message:string)=>{
    Swal.fire({
      title: "Aviso !",
      text: message,
      icon: "success"
    });
  }

  // muestra un mensaje de error
  export const panelError = (error:string)=>{
    Swal.fire({
      title: "Aviso !",
      text: error,
      icon: "error"
    });
  }

  export const panelAfirmacion=(data:string) =>{
    Swal.fire({
      title: "Seguro que lo quieres eliminar",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, deseo eliminarlo"
    }).then((result) => {
      
      if (result.isConfirmed) {
        Swal.fire({
          title: `El ${data} se elimino con exito !`,
          icon: "success"
        });
        
      }
     
    });
  }