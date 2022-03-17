import React, { useState } from "react";
import { AddQuote } from "../AddQuote/AddQuote";
import './Header.scss';

export const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal)
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
      <AddQuote showModal={showModal} setShowModal={setShowModal} />
    </header>
  );
}
