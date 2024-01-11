import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

const useAlerta = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const alertaMensaje = (icon, title) => {
    Swal.fire({
      position: 'center',
      icon: icon,
      title: title,
      showConfirmButton: false,
      timer: 2500
    })
  }

  const alertaPregunta = (title, icon, confirmButtonText, cancelButtonText, dispatchAction) => {
    Swal.fire({
      title,
      icon,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText,
      cancelButtonText
    })
      .then(result => {
        if (result.isConfirmed) {
          dispatch(dispatchAction())
          alertaMensaje('success', 'El libro ha sido eliminado');
          navigate('/library');
        } else if (result.isDismissed) {
          return;
        }
      })
  }

  return {
    alertaMensaje,
    alertaPregunta
  }
}

export default useAlerta