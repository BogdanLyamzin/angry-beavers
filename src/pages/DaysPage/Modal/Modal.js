import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import EditDelete from '../SectionDelete&Edit/EditDelete'
const ModalChange = ({showModal,addDay,dayChange,updateDay,dayAdd}) => {
 
  return (
    <Modal open={showModal}>
      <Backdrop open={showModal}>
        <EditDelete dayAdd={dayAdd} updateDay={updateDay} dayChange={dayChange} addDay={addDay}/>
      </Backdrop>
    </Modal>
   );
}
 
export default ModalChange;