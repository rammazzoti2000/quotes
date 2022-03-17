import React from "react";
import moment from "moment";

import headshotImg from '../../../assets/images/png/headshot.png';
import replyIcon from '../../../assets/images/svg/reply.svg';

import './Quote.scss';

interface IProps {
  quote: {
    authorId: number;
    authorName: string;
    body: string;
    comments: number;
    created: any;
    updated: string;
    hashtags: string[];
    likes: number;
    quoteId: number;
    role: string;
  }
}

export const Quote = ({ quote } : IProps) => {
  return (
    <div className="quote-wrapper">
      <div className="quote-wrapper__votes">
        <button className="quote-wrapper__votes-button quote-wrapper__votes-button-plus" type="button">+</button>
          {quote.likes}
        <button className="quote-wrapper__votes-button quote-wrapper__votes-button-minus" type="button">-</button>
      </div>
      <article className="quote-wrapper__details">
        <div className="quote-wrapper__details-header">
          <div className="quote-wrapper__details-header-user">
            <div className="quote-wrapper__details-header-user quote-wrapper__details-user-name">
              <img
                src={headshotImg}
                className="quote-wrapper__details-header-headshot"
                alt="user profile headshot"
              />
              {quote.authorName}
            </div>
            <span className="quotes-wrapper__details-header-user-timestamp">{moment(quote.created.toDate(), "YYYYMMDD").fromNow()}</span>
          </div>
          <div className="quote-wrapper__details-header-reply">
            <img src={replyIcon} alt="reply back" className="quote-wrapper__details-header-reply-img" />
            Reply
          </div>
        </div>
        <p className="quote-wrapper__body">
          {quote.body}
        </p>
      </article>
      <span className="quote-wrapper__hashtags">{quote.hashtags.map(item => `#${item} `)}</span>
    </div>
  );
};
