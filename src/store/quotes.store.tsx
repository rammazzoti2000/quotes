import { makeAutoObservable } from "mobx"
import { firestore } from '../utilities/firebase';
import { IQuotes } from "../models/IQuotes.model";

class QuotesStore {
  rootStore;

  quotes: IQuotes | [] = [];

  constructor(rootStore: any) {
    makeAutoObservable(this);

    this.rootStore = rootStore;
  }

  async getQuotes() {
    const response = await firestore.collection('quotes').onSnapshot(snapshot => snapshot.docs.map(doc => doc.data()));

    console.log(response);
  }
}

export default QuotesStore;
