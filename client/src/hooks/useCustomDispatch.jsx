import { useDispatch } from "react-redux"

const useCustomDispatch = () => {
  
  const dispatch = useDispatch();
  
const customDispatch = async (fn) => {
  await dispatch(fn);
}

  return {
    customDispatch
  }
}

export default useCustomDispatch