import React from "react";
import "./ModalStyles.css";

const Modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Ensure the content is rendered correctly */}
          {typeof content === "string" ? <p>{content}</p> : content}
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button className="close-modal-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
