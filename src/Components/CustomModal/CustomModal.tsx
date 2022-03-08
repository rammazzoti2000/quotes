import React from "react";
import './CustomModal.scss';

interface IProps {
  handleClose: Function;
  show: boolean;
  children: React.ReactNode;
}

export const CustomModal = ({ handleClose, show = false, children }: IProps) => {
  return show ? (
    <div
      className="modal-backdrop"
      onClick={() => handleClose()}
    >
      <div
        className="modal-backdrop__content"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={() => handleClose()}>Close</button>
        {children}
      </div>
    </div>
  ) : null;
};
