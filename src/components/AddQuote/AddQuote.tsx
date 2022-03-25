import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { useStore } from "../../store";
import { CustomModal } from "../CustomModal/CustomModal";

import './AddQuote.scss';

interface IProps {
  showModal: boolean;
  setShowModal: Function;
};

export const AddQuote = observer(({ showModal = false, setShowModal }: IProps) => {
  const [author, setAuthor] = useState('');
  const [hashtagInput, setHashtagInput] = useState('');
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [quoteBody, setQuoteBody] = useState('');

  const [displayError, setDisplayError] = useState(false);
  const [error, setError] = useState({
    author: '',
    hashtagInput: '',
    quoteBody: '',
  });

  const { quotesStore } = useStore();

  const cleanErrors = () => {
    setError({
      author: '',
      hashtagInput: '',
      quoteBody: '',
    });
    setDisplayError(false);
  };

  const cleanData = () => {
    setAuthor('');
    setHashtagInput('');
    setQuoteBody('');
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    let shouldDisplay = false;
    const tempError = {
      author: '',
      hashtagInput: '',
      quoteBody: '',
    };

    if (author.trim() === '') {
      tempError.author = 'Please fill in Author.';
      shouldDisplay = true;
    }

    if (quoteBody.trim() === '') {
      tempError.quoteBody = 'Please fill in Quote.';
      shouldDisplay = true;
    }

    if (hashtagInput.trim() === '' && !hashtags.length) {
      tempError.hashtagInput = 'Please add at least one hashtag.';
      shouldDisplay = true;
    }

    if (!hashtags.length && hashtagInput.trim() !== '') {
      tempError.hashtagInput = "Type ' , ' or press 'Enter' key to save the hashtag.";
      shouldDisplay = true;
    }

    if (hashtagInput.trim() !== '') {
      tempError.hashtagInput = "Type ' , ' or press 'Enter' key to save the hashtag.";
      shouldDisplay = true;
    }

    if (shouldDisplay) {
      setError(tempError);
      setDisplayError(true);
      return;
    }

    const quote: any = {
      authorId: 2,
      authorName: author,
      body: quoteBody,
      comments: 0,
      created: new Date(),
      hashtags,
      likes: 0,
      role: 'user',
      updated: new Date()
    }

    await quotesStore.setQuote(quote);
    cleanData();
    cleanErrors();
    setHashtags([]);
    setShowModal(false);
  };

  const handleChangeAuthor = (event: any) => {
    setAuthor(event.target.value);
    cleanErrors();
  };

  const handleChangeHashtags = (event: any) => {
    setHashtagInput(event.target.value);
    cleanErrors();
  }

  const onHashtagKeyDown = (event: any) => {
    event.stopPropagation();

    const { key } = event;
    const trimmedInput = hashtagInput.trim();

    if ((key === 'Enter' || key === ',') && trimmedInput.length && !hashtags.includes(trimmedInput)) {
      event.preventDefault();
      setHashtags(prevState => [...prevState, trimmedInput]);
      setHashtagInput('');
    }

    cleanErrors();
  };

  const handleRemoveHashtag = (tag: string) => {
    setHashtags(prev => {
      return prev.filter(item => item !== tag);
    });
  };

  const handleChangeQuote = (event: any) => {
    setQuoteBody(event.target.value);
    cleanErrors();
  }

  const handleCloseModal = () => {
    setShowModal(false);
    cleanData();
    cleanErrors();
    setHashtags([]);
  }

  return (
    <CustomModal
      title="Add new quote"
      show={showModal}
      handleClose={handleCloseModal}
    >
      <form onSubmit={handleSubmit} className="modal-form">
        <div className="modal-form__inputs">
          <div className="modal-form__input">
            <input
              type="text"
              value={author}
              onChange={handleChangeAuthor}
            />
            <label className={author && 'filled'}>
              Author
            </label>
            <span className="modal-form__field-error">
              {displayError && error.author}
            </span>
          </div>

          <div className="modal-form__input">
            <textarea
              value={quoteBody}
              onChange={handleChangeQuote}
              rows={5} cols={33}
            />
            <label className={quoteBody && 'filled'}>
              Quote
            </label>
            <span className="modal-form__field-error">
              {displayError && error.quoteBody}
            </span>
          </div>

          <div className="modal-form__input">
            <input
              type="text"
              value={hashtagInput}
              onChange={handleChangeHashtags}
              onKeyDown={onHashtagKeyDown}
            />
            <label className={hashtagInput && 'filled'}>
              Hashtags
            </label>
            <span className="modal-form__field-error">
                {(displayError && error.hashtagInput)}
              </span>
              <div className="hashtags">
                {(hashtags || []).map((tag) =>
                  <div className="hashtags__tag">
                    <span className="hashtags__delete-tag" onClick={() => handleRemoveHashtag(tag)}>x</span>
                    {tag}
                  </div>
                )}
              </div>
          </div>
        </div>

        <input type="submit" value="Submit" className="modal-form__submit" />
      </form>
    </CustomModal>
  );
});

