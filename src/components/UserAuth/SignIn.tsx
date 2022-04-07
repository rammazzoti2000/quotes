import { observer } from 'mobx-react-lite';
import React from 'react'
import { useStore } from '../../store';
import { signInWithGoogle } from '../../utilities/firebase';

export const SignIn = () => {
  // const { userStore } = useStore();
  const handleSignIn = async () => {
    await signInWithGoogle();
  }

  return (
    <div className='quotes-signin'>
      <button onClick={handleSignIn}>Sign In With Google</button>
    </div>
  );
}
