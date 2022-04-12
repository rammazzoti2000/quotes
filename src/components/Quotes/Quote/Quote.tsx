import React from "react";

import headshotImg from '../../../assets/images/png/headshot.png';
import replyIcon from '../../../assets/images/svg/reply.svg';
import deleteIcon from '../../../assets/images/svg/delete-icon.svg';

import { IQuote } from "../../../models/quote.model";
import { QuoteDetails } from "./QuoteDetails/QuoteDetails";
import { QuoteVotes } from "./QuoteVotes/QuoteVotes";

import './Quote.scss';

export const Quote = ({ ...quote }: IQuote) => {
  return (
    <div className="quote">
      <div className="quote__content">
        <QuoteVotes likes={quote.likes} />
        <QuoteDetails
          headshotImg={quote.headshot || headshotImg}
          replyIcon={replyIcon}
          authorName={quote.authorName}
          created={quote.created}
          body={quote.body}
        />
      </div>
      <div className="quote__bottom">
        <span className="quote__hashtags">{quote.hashtags.map(item => `#${item} `)}</span>
        <img className="quote__delete" src={deleteIcon} alt=" delete quote" />
      </div>
    </div>
  );
};
