import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../store";
import { v4 as uuidv4 } from 'uuid';
import { Quote } from "../Quote/Quote";
import './QuotesList.scss';

export const QuotesList = observer(() => {
  const { quotesStore } = useStore();
  const { quotes } = quotesStore;

  return (
    <div className="quotes-list">
      {quotes.map((quote) => (
        <Quote {...quote} key={uuidv4()} />
      ))}
    </div>
  );
});
