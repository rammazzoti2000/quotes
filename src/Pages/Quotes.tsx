import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../store";

import { QuotesList } from "../Components/Quotes/QuotesList/QuotesList";

export const Quotes = observer(() => {
  const { quotesStore } = useStore();

  useEffect(() => {
    quotesStore.getQuotes();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="Quotes">
      <QuotesList />
    </section>
    );
});
