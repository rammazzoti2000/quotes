import React, { useState } from "react";
import { CustomModal } from "../CustomModal/CustomModal";
import './Header.scss';

export const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal)
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  return (
    <header className="quotes-header">
      <div className="quotes-header__user">Alexandru</div>
      <button
        className="quotes-header__create-quote-btn"
        onClick={handleShowModal}
      >
        Add Quote
      </button>
      <CustomModal show={showModal} handleClose={handleCloseModal}>
        <div>
          Modal is working
        </div>
      </CustomModal>
    </header>
  );
}
