import React from "react";

import './QuoteVotes.scss';

export const QuoteVotes = ({ likes = 0 }: { likes: number }) => {
  return (
    <div className="quote-votes">
      <button className="quote-votes__button quote-votes__button--plus" type="button">+</button>
      {likes}
      <button className="quote-votes__button quote-votes__button--minus" type="button">-</button>
    </div>
  );
};
