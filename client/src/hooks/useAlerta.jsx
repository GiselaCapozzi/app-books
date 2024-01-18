import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useCustomDispatch from './useCustomDispatch';

const useAlerta = () => {

  const navigate = useNavigate();
 const { customDispatch } = useCustomDispatch();

  const alertaMensaje = async (icon, title) => {
    await Swal.fire({
      position: 'center',
      icon: icon,
      title: title,
      showConfirmButton: false,
      timer: 2500
    })
  }

  const alertaPregunta = async (title, icon, confirmButtonText, cancelButtonText, dispatchAction) => {
    await Swal.fire({
      title,
      icon,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText,
      cancelButtonText
    })
      .then(result => {
        if (result.isConfirmed) {
          customDispatch(dispatchAction())
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