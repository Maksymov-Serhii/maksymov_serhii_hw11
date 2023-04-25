import React from "react";
import './ModalWindow.css';

const ModalWindow = ({ onClose }) => {
  return (
    <>
      <div className="modal-wrapper" onClick={onClose}></div>
      <div className="modal-window">
        <h3>Modal content</h3>
        <button onClick={onClose} className="close-modal">&times;</button>
      </div>
    </>
  )
}

export default ModalWindow;
