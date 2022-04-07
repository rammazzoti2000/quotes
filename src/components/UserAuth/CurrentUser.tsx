import React from 'react';
import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar'
import { auth } from '../../utilities/firebase';

interface IProps {
  user: {
    displayName: string;
    photoURL: string;
    email: string;
    createdAt: Date;
  },
  children?: React.ReactNode
}

export const CurrentUser = ({ user, children }: IProps) => {
  dayjs.extend(calendar);

  const { displayName, photoURL, email, createdAt } = user;

  return (
    <section className="CurrentUser">
      <div className="CurrentUser--profile">
        {photoURL && <img src={photoURL} alt={displayName} />}
        <div className="CurrentUser--information">
          <h2>{displayName}</h2>
          <p className="email">{email}</p>
          <p className="created-at">{dayjs(createdAt).calendar()}</p>
        </div>
      </div>
      <div>
        <div>{children}</div>
        <button onClick={() => auth.signOut()}>Sign Out</button>
      </div>
    </section>
  );
};

// CurrentUser.defaultProps = {
//   displayName: 'Bill Murray',
//   email: 'billmurray@mailinator.com',
//   photoURL: 'https://www.fillmurray.com/300/300',
//   createdAt: new Date(),
// };
