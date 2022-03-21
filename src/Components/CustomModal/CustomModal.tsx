import React from "react";
import { CloseIcon } from "../Icons/svg/CloseIcon";

import './CustomModal.scss';

interface IProps {
  handleClose: () => void;
  show: boolean;
  title?: string;
  children: React.ReactNode;
}

export const CustomModal = ({ handleClose, show = false, title='', children }: IProps) => {
  return show ? (
    <div
      className="modal-backdrop"
      onClick={() => handleClose()}
    >
      <div
        className="modal-backdrop__content"
        onClick={e => e.stopPropagation()}
        >
        <CloseIcon className="modal-backdrop__close" onClick={handleClose} />
        <header className="modal-backdrop__header">{title}</header>
        {children}
      </div>
    </div>
  ) : null;
};
