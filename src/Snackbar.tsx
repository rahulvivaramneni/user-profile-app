import React from "react";

interface SnackbarProps {
  message: string;
  onClose: () => void;
}

const Snackbar: React.FC<SnackbarProps> = ({ message, onClose }) => {
  return (
    <div className="snackbar">
      <span>{message}</span>
      <button className="snackbar-close" onClick={onClose}>
        X
      </button>
    </div>
  );
};

export default Snackbar;
