import React from "react";
import './Footer.scss';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="quotes-footer">
      &copy; Copyright {year} - Alex Bangau
    </footer>
  );
}
