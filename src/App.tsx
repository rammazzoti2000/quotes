import React, { useEffect, useState } from 'react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Authentication } from './components/UserAuth/Authentication';
import { Quotes } from './pages/Quotes';
import { useStore } from './store';
import { firestore } from './utilities/firebase';

const App = () => {
  const [comments, setComments] = useState<object[]>([]);
  // const [quotes, setQuotes] = useState<object[]>([]);

  const { userStore } = useStore();
  const { user } = userStore;

  useEffect(() => {
    userStore.userAuthWithGoogle();
  }, []);

  let unsubscribeFromCommentsFirestore = null;
  let unsubscribeFromQuotesFirestore = null

  const getComments = async () => {
    unsubscribeFromCommentsFirestore = await firestore.collection('comments').onSnapshot(snapshot => {
      const comments = snapshot.docs.map(doc => doc.data())
      setComments(comments)
    });
  }

  // const getQuotes = async () => {
  //   unsubscribeFromQuotesFirestore = await firestore.collection('quotes').onSnapshot(snapshot => {
  //     const quotes = snapshot.docs.map(doc => doc.data())
  //     setQuotes(quotes)
  //   });
  // }

  // console.log({ comments, quotes })

  useEffect(() => {
    getComments()
    // getQuotes()
  }, [unsubscribeFromQuotesFirestore, unsubscribeFromCommentsFirestore]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="App">
      <Authentication user={user} loading={user?.isLoading}/>
      {/* <Header />
      <Quotes />
      <Footer /> */}
    </div>
  );
}

export default App;
