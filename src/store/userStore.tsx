import { makeAutoObservable } from "mobx";
import { auth } from "../utilities/firebase";

export class UserStore {
  rootStore;

  user: any = {
    googleUser: {},
    isLoading: false
  }

  constructor(rootStore: any) {
    makeAutoObservable(this);

    this.rootStore = rootStore;
  }

  async userAuthWithGoogle() {
    this.user.isLoading = true;

    try {
      auth.onAuthStateChanged(user => {
        this.user = {
          googleUser: user,
          isLoading: false
        };
      });
    } catch (error: any) {
      console.log(error.message);
      this.user.isLoading = false;
    }
  }
}

export default UserStore;
