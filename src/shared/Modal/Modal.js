import { createPortal } from 'react'
import styles from './Modal.module.css'
const modal = document.getElementById('modal')
const Modal = ({children}) => {
  return createPortal(
    <div className={styles.backdrop}>
      <div className={styles.content}>{children}</div>
    </div>,modal);
}
 
export default Modal;