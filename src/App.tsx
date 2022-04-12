import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { AppLayout } from './AppLayout';
import { useStore } from './store';
import { firestore } from './utilities/firebase';

const App = observer(() => {
  const [comments, setComments] = useState<object[]>([]);

  const { userStore } = useStore();

  let unsubscribeFromCommentsFirestore = null;
  let unsubscribeFromQuotesFirestore = null

  const getComments = async () => {
    unsubscribeFromCommentsFirestore = await firestore.collection('comments').onSnapshot(snapshot => {
      const comments = snapshot.docs.map(doc => doc.data())
      setComments(comments)
    });
  }

  useEffect(() => {
    userStore.userAuthWithGoogle();
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    getComments()
  }, [unsubscribeFromQuotesFirestore, unsubscribeFromCommentsFirestore]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="App">
      <AppLayout />
    </div>
  );
});

export default App;
