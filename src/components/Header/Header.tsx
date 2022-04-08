import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { useStore } from "../../store";
import { auth } from "../../utilities/firebase";
import { AddQuote } from "../AddQuote/AddQuote";
import { SignIn } from "../UserAuth/SignIn";
import headshotImg from '../../assets/images/png/headshot.png';

import './Header.scss';

export const Header = observer(() => {
  const [showModal, setShowModal] = useState(false);

  const { userStore } = useStore();
  const { user } = userStore;
  const { googleUser } = user;

  const handleShowModal = () => {
    setShowModal(!showModal)
  }

  return (
    <header className="quotes-header">
      {googleUser ?
        <div className="quotes-header__dropdown">
          <div className="quotes-header__user">
            <img
              src={googleUser.photoURL || headshotImg}
              className="quote-header__headshot"
              alt="user profile headshot"
            />
            {googleUser.displayName || "User"}
          </div>
          <span className="quotes-header__dropdown--content">
            <span className="dropdown-arrow"></span>
            <button
              className="quotes-header__add-quote"
              onClick={() => auth.signOut()}
            >
              Logout
            </button>
          </span>
        </div> :
        <SignIn />
      }
      {googleUser &&
        <button
          className="quotes-header__add-quote"
          onClick={handleShowModal}
        >
          Add Quote
        </button>
      }
      <AddQuote showModal={showModal} setShowModal={setShowModal} />
    </header>
  );
});
