import React, { useEffect, useState } from 'react';
import { firestore } from './utilities/firebase';

const App = () => {
  const [comments, setComments] = useState<object[]>([]);
  const [quotes, setQuotes] = useState<object[]>([]);

  let unsubscribeFromCommentsFirestore = null;
  let unsubscribeFromQuotesFirestore = null

  const getComments = async () => {
    unsubscribeFromCommentsFirestore = await firestore.collection('comments').onSnapshot(snapshot => {
      const comments = snapshot.docs.map(doc => doc.data())
      setComments(comments)
    });
  }

  const getQuotes = async () => {
    unsubscribeFromQuotesFirestore = await firestore.collection('quotes').onSnapshot(snapshot => {
      const quotes = snapshot.docs.map(doc => doc.data())
      setQuotes(quotes)
    });
  }

  console.log({ comments, quotes })
  console.log({ unsubscribeFromCommentsFirestore });

  useEffect(() => {
    console.log('use effect')
    getComments()
    getQuotes()
  }, [unsubscribeFromQuotesFirestore, unsubscribeFromCommentsFirestore]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="App">
      Quotes
    </div>
  );
}

export default App;
