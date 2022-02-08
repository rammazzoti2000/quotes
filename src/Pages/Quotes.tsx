import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Quote } from "../Components/Quote";
import { useStore } from "../store";

export const Quotes = observer(() => {
  const { quotesStore } = useStore();

  useEffect(() => {
    quotesStore.getQuotes();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Quote />
  );
});
