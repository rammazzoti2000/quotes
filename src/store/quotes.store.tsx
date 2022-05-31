import { makeAutoObservable } from "mobx"
import { IQuote } from "../models/quote.model";
import { collectIdsAndDocs } from "../utilities/collectIdsAndDocs";
import { firestore as fireStore } from '../utilities/firebase';
import firebase from "firebase/compat/app";

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
        const quotes: any = snapshot.docs.map(collectIdsAndDocs);
        this.quotes = quotes;
      });
    } catch (error: any) {
      console.log(error.message);
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

  async deleteQuote(id: string) {
    try {
      const quoteRef = fireStore.doc(`quotes/${id}`);
      await quoteRef.delete();
    } catch (error: any) {
      console.log(error.message);
    }
  }

  getVotes(quoteId: string) {
    const index = this.quotes.findIndex(item => item.id === quoteId);

    return (this.quotes[index].likes || []).filter((item: any) => item?.liked).length;
  }

  async setUpVote(quoteId: string, userId: string) {
    const quoteIndex = this.quotes.findIndex(item => item.id === quoteId);
    const quote = this.quotes[quoteIndex];
    const quoteVoteIndex = quote.likes.findIndex(vote => vote.userId === userId);

    try {
      if (userId && (!this.quotes[quoteIndex].likes.length || quoteVoteIndex === -1)) {
        await fireStore.collection('quotes').doc(quote.id).set({
          ...quote,
          likes: [
            ...quote.likes,
            {
              userId,
              liked: true
            }
          ]
        });

        return;
      }

      const quoteRef = fireStore.doc(`quotes/${quoteId}`);

      if (userId) {
        await quoteRef.update({
          likes: firebase.firestore.FieldValue.arrayUnion({
            userId,
            liked: true
          }),
        })
  
        await quoteRef.update({
          likes: firebase.firestore.FieldValue.arrayRemove({
            userId,
            liked: false
          }),
        })
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }

  async setDownVote(quoteId: string, userId: string) {
    const quoteRef = fireStore.doc(`quotes/${quoteId}`);

    try {
      if (userId) {
        await quoteRef.update({
          likes: firebase.firestore.FieldValue.arrayUnion({
            userId,
            liked: false
          }),
        })
  
        await quoteRef.update({
          likes: firebase.firestore.FieldValue.arrayRemove({
            userId,
            liked: true
          }),
        })
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }
}

export default QuotesStore;
