import React from "react";

import headshotImg from '../../../assets/images/png/headshot.png';
import replyIcon from '../../../assets/images/svg/reply.svg';

import './Quote.scss';
import { IQuote } from "../../../models/quote.model";
import { QuoteDetails } from "./QuoteDetails/QuoteDetails";
import { QuoteVotes } from "./QuoteVotes/QuoteVotes";

export const Quote = ({ ...quote }: IQuote) => {
  return (
    <div className="quote">
      <QuoteVotes likes={quote.likes} />
      <QuoteDetails
        headshotImg={headshotImg}
        replyIcon={replyIcon}
        authorName={quote.authorName}
        created={quote.created}
        body={quote.body}
      />
      <span className="quote__hashtags">{quote.hashtags.map(item => `#${item} `)}</span>
    </div>
  );
};
