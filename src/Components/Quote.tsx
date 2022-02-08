import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../store";

export const Quote = observer(() => {
  const { quotesStore } = useStore();
  const { quotes } = quotesStore;

  console.log(JSON.parse(JSON.stringify(quotes)))
  return (
    <div>Quote</div>
  );
});
