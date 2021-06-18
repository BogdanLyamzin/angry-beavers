import { useState } from "react";

const useModal = () => {
  const [showModal, setshowModal] = useState(false)
  const toggleModal = () => {
    setshowModal(!showModal)
  }
  return [showModal,setshowModal,toggleModal]
}
 
export default useModal;