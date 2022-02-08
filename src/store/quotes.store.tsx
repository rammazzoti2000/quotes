import { makeAutoObservable } from "mobx"
import { firestore } from '../utilities/firebase';
import { IQuotes } from "../models/IQuotes.model";

class QuotesStore {
  rootStore;

  quotes: object[] = [];

  constructor(rootStore: any) {
    makeAutoObservable(this);

    this.rootStore = rootStore;
  }

  async getQuotes() {
   try {
    await firestore.collection('quotes').onSnapshot(snapshot => {
      const quotes = snapshot.docs.map(doc => doc.data());
      this.quotes = quotes;
    });
   } catch (error: any) {
     console.log(error.message)
   }
  }
}

export default QuotesStore;
