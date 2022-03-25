import React from "react";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';

import './QuoteDetails.scss';

interface IProps {
  headshotImg: string;
  replyIcon: string;
  authorName: string,
  created: any,
  body: string
}

export const QuoteDetails = ({
  headshotImg,
  replyIcon,
  authorName = '',
  created = '',
  body = ''
}: IProps) => {
  dayjs.extend(relativeTime);

  return (
    <article className="quote-details">
      <div className="quote-details__header">
        <div className="quote-details__user">
          <div className="quote-details__user quote-details__user--name">
            <img
              src={headshotImg}
              className="quote-details__headshot"
              alt="user profile headshot"
            />
            {authorName}
          </div>
          <span className="quotes-details__timestamp">{dayjs(created.toDate(), "YYYYMMDD").fromNow()}</span>
        </div>
        <div className="quote-details__reply">
          <img src={replyIcon} alt="reply back" className="quote-details__reply--img" />
          Reply
        </div>
      </div>
      <p className="quote-details__body">
        {body}
      </p>
    </article>
  );
};
