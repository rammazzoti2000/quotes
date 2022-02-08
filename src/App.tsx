import React, { useEffect, useState } from 'react';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { Quotes } from './Pages/Quotes';
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

  // console.log({ comments, quotes })

  useEffect(() => {
    getComments()
    getQuotes()
  }, [unsubscribeFromQuotesFirestore, unsubscribeFromCommentsFirestore]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="App">
      <Header />
      <Quotes />
      <Footer />
    </div>
  );
}

export default App;
