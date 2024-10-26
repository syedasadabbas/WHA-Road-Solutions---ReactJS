import React from "react";

const MessageModal = ({ message, onClose }) => (
  <div className="modal-overlayed">
    <div className="modal">
      <button className="modal-close" onClick={onClose}>
        &times;
      </button>
      <p>{message}</p>
    </div>
  </div>
);

export default MessageModal;