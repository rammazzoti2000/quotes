import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../store";
import { Quote } from "./Quote";

export const QuotesList = observer(() => {
  const { quotesStore } = useStore();
  const { quotes } = quotesStore;

  console.log(JSON.parse(JSON.stringify(quotes)))

  return (
    <>
      {quotes.map((quote, index) => (
        <Quote quote={quote} key={index} />
      ))}
    </>
  );
});
