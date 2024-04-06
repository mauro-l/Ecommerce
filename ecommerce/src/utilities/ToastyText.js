
//import sweetalert
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

export function ToastyText(message, figure = null) {

  let icons;
  if (figure !== null){
    icons = figure
  }else{
    icons = "warning"
  }

  console.log('pasa por el componente toast')
  const Toasty = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
  });

  Toasty.fire({
    icon: icons,
    title: message
  });
}

export function alertModal (){
  Swal.fire({
    title: "Finalizando compra, aguarde unos segundos...",
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
    }
  });
}
