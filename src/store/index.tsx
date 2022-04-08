import { createContext, FC, useContext } from 'react';
import QuotesStore from './quotes.store';
import UserStore from './userStore';

class RootStore {
  quotesStore;
  userStore;

  constructor() {
    this.quotesStore = new QuotesStore(this);
    this.userStore = new UserStore(this);
  }
}

const StoreContext = createContext<RootStore>(new RootStore());
const StoreProvider: FC<{ store: RootStore }> = ({ store, children }) => {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

const useStore = () => useContext(StoreContext);

export { RootStore, StoreProvider, useStore };
