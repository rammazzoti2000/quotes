import moment from "moment";
import React from "react";

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
      <div className="quote-wrapper__votes">{quote.likes}</div>
      <div className="quotes-wrapper__details">
        <div className="quotes-wrapper__details-header">
          <div className="quotes-wrapper__details-header-user">
            <div className="quotes-wrapper__details-header-user-name">{quote.authorName}</div>
            </div>
          <span className="quotes-wrapper__details-header-user-timestamp">{moment(quote.created.toDate()).calendar()}</span>
          <div className="quotes-wrapper__details-header-reply">Reply</div>
        </div>
        <div className="quotes-wrapper__body">{quote.body}</div>
      </div>
    </div>
  );
};
