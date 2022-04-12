import React from 'react';
import { CustomModal } from '../CustomModal/CustomModal';

import './DeleteQuote.scss';

interface IProps {
  showModal: boolean;
  setShowModal: Function;
  handleDelete: () => void;
};

export const DeleteQuote = ({ showModal = false, setShowModal, handleDelete }: IProps) => {
  const handleCloseModal = () => {
    setShowModal(false);
  }

  return (
    <CustomModal
      title="Confirm Delete"
      show={showModal}
      handleClose={handleCloseModal}
    >
      <div className='quote__confirm'>
        <p className='quote__confirm--warning'>Are you sure you want to delete this quote? This operation can’t be undone!</p>
        <div className='quote__confirm--btns'>
          <button
            className='quote__confirm--cancel quote__action--btn'
            type='button'
            onClick={handleCloseModal}
          >
            NO, CANCEL
          </button>
          <button
            className='quote__confirm--delete quote__action--btn'
            type='button'
            onClick={handleDelete}
          >
            YES, DELETE
          </button>
        </div>
      </div>
    </CustomModal>
  )
}
