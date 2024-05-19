import React, { useState } from "react";
import "./message.css";

const Message = ({ content, onClose }) => {
  return (
    <div className="message">
      <div className="message-content">{content}</div>
      <button className="message-close" onClick={onClose}>
        ×
      </button>
    </div>
  );
};

export default Message;
