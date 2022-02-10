import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { useStore } from "../store";

export const AddQuote = observer(() => {
  const [body, setBody] = useState('');

  const { quotesStore } = useStore();

  const handleChange = (event: any) => {
    const { value } = event.target;
    setBody(value);
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const quote: any = {
      authorId: 2,
      authorName: 'maxinova',
      body,
      comments: 0,
      created: new Date(),
      hashtags: ['first', 'testing'],
      likes: 0,
      role: 'user',
      updated: new Date()
    }

    quotesStore.setQuote(quote);
    setBody('');
  }

  return (
    <form onSubmit={handleSubmit} className="AddQuote">
      <input
        type="text"
        name="body"
        placeholder="Content"
        value={body}
        onChange={handleChange}
      />
      <input className="create" type="submit" value="Add Quote" />
    </form>
  );
});

