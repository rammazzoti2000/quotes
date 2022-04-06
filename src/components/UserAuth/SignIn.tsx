import React from 'react'
import { signInWithGoogle } from '../../utilities/firebase';

export default function SignIn() {

  return (
    <div className='quotes-signin'>
      <input type="submit" value="Sign In" />
      <button onClick={() => signInWithGoogle()}>Sign In With Google</button>
    </div>
  );
}
