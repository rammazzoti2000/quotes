import React from "react";
import './Header.scss';

export const Header = () => {
  return (
    <header className="quotes-header">
      <div className="quotes-header__user">Alexandru</div>
      <button className="quotes-header__create-quote-btn">Add Quote</button>
    </header>
  );
}
