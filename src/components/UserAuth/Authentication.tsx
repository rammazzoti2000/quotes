import React from 'react';

import { CurrentUser } from './CurrentUser';
import { SignIn } from './SignIn';

interface IProps {
  user: any;
  loading: boolean
}

export const Authentication = ({ user, loading }: IProps) => {
  if (loading) return null;

  return <div>{user ? <CurrentUser user={user} /> : <SignIn />}</div>;
};
