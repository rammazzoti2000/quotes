import React, { useState } from "react";
import { CustomModal } from "../CustomModal/CustomModal";
import './Header.scss';

export const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [author, setAuthor] = useState('');
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [quoteBody, setQuoteBody] = useState('');
  const [displayError, setDisplayError] = useState(false);
  const [error, setError] = useState({
    author: '',
    hashtags: [],
    quoteBody: '',
  });

  const cleanErrors = () => {
    setError({
      author: '',
      hashtags: [],
      quoteBody: '',
    });
    setDisplayError(false);
  };

  const cleanData = () => {
    setAuthor('');
    setHashtags([]);
    setQuoteBody('');
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    let shouldDisplay = false;
    const tempError = {
      author: '',
      hashtags: [],
      quoteBody: '',
    };

    if (author.trim() === '') {
      tempError.author = 'Please fill in Author.';
      shouldDisplay = true;
    }

    // if (!hashtags.length) {
    //   tempError.author = 'Please fill in minimum one hashtag.';
    //   shouldDisplay = true;
    // }

    if (quoteBody.trim() === '') {
      tempError.author = 'Please fill in Quote.';
      shouldDisplay = true;
    }

    if (shouldDisplay) {
      setError(tempError);
      setDisplayError(true);
      return;
    }
  }

  const handleChangeAuthor = (event: any) => {
    setAuthor(event.target.value);
    cleanErrors();
  };

  // const handleChangeHashtags = (event: any) => {
    
  // }

  const handleChangeQuote = (event: any) => {
    setQuoteBody(event.target.value);
    cleanErrors();
  }

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
        <div>
          <form onSubmit={handleSubmit}>
            <div className="quotes-modal__inputs">
              <label>
                Author
                  <input type="text" value={author} onChange={handleChangeAuthor} />
                  <span className="quotes-modal__field-error">
                    {displayError && error.author}
                  </span>
              </label>
              <label>
                Quote
                <input type="text" value={quoteBody} onChange={handleChangeQuote} />
                <span className="quotes-modal__field-error">
                  {displayError && error.quoteBody}
                </span>
              </label>
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
        </div>
      </CustomModal>
    </header>
  );
}
