import React from 'react'
import { signInWithGoogle } from '../../utilities/firebase';
import googleIcon from '../../assets/images/svg/google-icon.svg'

import './SignIn.scss';

export const SignIn = () => {
  const handleSignIn = async () => {
    await signInWithGoogle();
  }

  return (
    <div className='quotes-signin'>
      <button className="quotes-header__add-quote google-signin" onClick={handleSignIn}>
        <img src={googleIcon} alt="sign in with google" />
        Login With Google
      </button>
    </div>
  );
}
