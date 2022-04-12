import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../store";

import headshotImg from '../../../assets/images/png/headshot.png';
import replyIcon from '../../../assets/images/svg/reply.svg';
import deleteIcon from '../../../assets/images/svg/delete-icon.svg';

import { IQuote } from "../../../models/quote.model";
import { QuoteDetails } from "./QuoteDetails/QuoteDetails";
import { QuoteVotes } from "./QuoteVotes/QuoteVotes";

import './Quote.scss';

export const Quote = observer(({ ...quote }: IQuote) => {
  const { userStore, quotesStore } = useStore();
  const { user } = quote;

  const handleDelete = async () => {
    await quotesStore.deleteQuote(quote.id)
  }

  return (
    <div className="quote">
      <div className="quote__content">
        <QuoteVotes likes={quote.likes} />
        <QuoteDetails
          headshotImg={user.headshot || headshotImg}
          replyIcon={replyIcon}
          authorName={user.authorName}
          created={quote.created}
          body={quote.body}
        />
      </div>
      <div className="quote__bottom">
        <span className="quote__hashtags">{quote.hashtags.map(item => `#${item} `)}</span>
        {userStore.getIsSameUser(user.authorId) &&
          <img onClick={handleDelete} className="quote__delete" src={deleteIcon} alt=" delete quote" />
        }
      </div>
    </div>
  );
});
