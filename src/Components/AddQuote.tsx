import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { useStore } from "../store";
import { CustomModal } from "./CustomModal/CustomModal";

interface IProps {
  showModal: boolean;
  setShowModal: Function;
};

export const AddQuote = observer(({ showModal = false, setShowModal }: IProps) => {
  const [body, setBody] = useState('');

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

  // const handleChange = (event: any) => {
  //   const { value } = event.target;
  //   setBody(value);
  // }

  // const handleSubmit = async (event: any) => {
  //   event.preventDefault();

  //   const quote: any = {
  //     authorId: 2,
  //     authorName: 'maxinova',
  //     body,
  //     comments: 0,
  //     created: new Date(),
  //     hashtags: ['first', 'testing'],
  //     likes: 0,
  //     role: 'user',
  //     updated: new Date()
  //   }

  //   quotesStore.setQuote(quote);
  //   setBody('');
  // }

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

    if (hashtagInput.trim() === '') {
      tempError.hashtagInput = 'Please add at least on hashtag.';
      shouldDisplay = true;
    }

    if (shouldDisplay) {
      setError(tempError);
      setDisplayError(true);
      return;
    }
  };

  const handleChangeAuthor = (event: any) => {
    setAuthor(event.target.value);
    cleanErrors();
  };

  const handleChangeHashtags = (event: any) => {
    setHashtagInput(event.target.value);
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
  };

  const handleRemoveHashtag = (event: any, tag: string) => {
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
    setHashtags([])
  }

  return (
    // <form onSubmit={handleSubmit} className="AddQuote">
    //   <input
    //     type="text"
    //     name="body"
    //     placeholder="Content"
    //     value={body}
    //     onChange={handleChange}
    //   />
    //   <input className="create" type="submit" value="Add Quote" />
    // </form>
    <CustomModal show={showModal} handleClose={handleCloseModal}>
      <form onSubmit={handleSubmit} className="quotes-modal__form">
        <div className="quotes-modal__inputs">
          <label>
            Author
            <input type="text" value={author} onChange={handleChangeAuthor} />
            <br />
            <span className="quotes-modal__field-error">
              {displayError && error.author}
            </span>
          </label>
          <br />
          <label>
            Quote
            <input type="text" value={quoteBody} onChange={handleChangeQuote} />
            <br />
            <span className="quotes-modal__field-error">
              {displayError && error.quoteBody}
            </span>
          </label>
          <br />
          <label>
            Hashtags
            <input
              type="text"
              value={hashtagInput}
              onChange={handleChangeHashtags}
              onKeyDown={onHashtagKeyDown}
            />
            {(hashtags || []).map((tag) =>
              <div className="tag">
                <span onClick={(event) => handleRemoveHashtag(event, tag)}>x {''}</span>
                {tag}
              </div>)}
            <br />
            <span className="quotes-modal__field-error">
              {(!hashtags.length && displayError && error.hashtagInput)}
            </span>
          </label>
        </div>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </CustomModal>
  );
});

