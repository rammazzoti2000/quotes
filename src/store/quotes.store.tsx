import { makeAutoObservable } from "mobx"
import { IQuote } from "../models/quote.model";
import { firestore as fireStore } from '../utilities/firebase';

class QuotesStore {
  rootStore;

  quotes: IQuote[] | [] = [];
  comments: object[] = [];

  constructor(rootStore: any) {
    makeAutoObservable(this);

    this.rootStore = rootStore;
  }

  async getQuotes() {
    try {
      fireStore.collection('quotes').onSnapshot(snapshot => {
        const quotes: any = snapshot.docs.map(doc => doc.data());
        this.quotes = quotes;
      });
    } catch (error: any) {
      console.log(error.message)
    }
  }

  // async getComments() {
  //   try {
  //     fireStore.collection('comments').onSnapshot(snapshot => {
  //       const comments = snapshot.docs.map(doc => doc.data());
  //       console.log(snapshot)
  //       this.comments = comments;
  //     });
  //   } catch (error: any) {
  //     console.log(error.message)
  //   }
  // }

  async setQuote(quote: any) {
    try {
      await fireStore.collection('quotes').doc(quote.id).set(quote);
    } catch (error: any) {
      console.log(error.message)
    }
  }
}

export default QuotesStore;
