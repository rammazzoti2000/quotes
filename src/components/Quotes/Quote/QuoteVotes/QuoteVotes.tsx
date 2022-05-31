import { observer } from "mobx-react-lite";
import React from "react";
import { useStore } from "../../../../store";

import './QuoteVotes.scss';

interface IProps {
  likes: number,
  quoteId: string,
  userId: string
}

export const QuoteVotes = observer(({ likes = 0, quoteId, userId }: IProps) => {
  const { quotesStore } = useStore();

  const handleUpVote = async () => {
    await quotesStore.setUpVote(quoteId, userId);
  }

  return (
    <div className="quote-votes">
      <button
        className="quote-votes__button quote-votes__button--plus"
        type="button"
        onClick={handleUpVote}
      >
        +
      </button>
      {likes}
      <button className="quote-votes__button quote-votes__button--minus" type="button">-</button>
    </div>
  );
});
