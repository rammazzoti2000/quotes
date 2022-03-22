import React from 'react';
import './CloseIcon.scss';

interface IProps {
  className?: string;
  onClick?: () => void;
  clickable?: boolean;
}

export const CloseIcon = ({ className='', onClick, clickable=false }: IProps ) => {
  return clickable ? (
    <button type='button' className={`close-icon-btn ${className}`} onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#40424c"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
    </button>
  ) : (
    <svg className={`close-icon ${className}`} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#40424c"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
  )
}
