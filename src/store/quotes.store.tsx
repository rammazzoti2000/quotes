import { makeAutoObservable } from "mobx"
import { firestore } from '../utilities/firebase';

class QuotesStore {
  rootStore;

  quotes: object[] = [];

  constructor(rootStore: any) {
    makeAutoObservable(this);

    this.rootStore = rootStore;
  }

  async getQuotes() {
    try {
      firestore.collection('quotes').onSnapshot(snapshot => {
        const quotes = snapshot.docs.map(doc => doc.data());
        this.quotes = quotes;
      });
    } catch (error: any) {
      console.log(error.message)
    }
  }

  async setQuote(quote: any) {
    try {
      await firestore.collection('quotes').doc(quote.id).set(quote);
    } catch (error: any) {
      console.log(error.message)
    }
  }
}

export default QuotesStore;
