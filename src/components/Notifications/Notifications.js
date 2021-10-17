import React, { useEffect, useState } from 'react';

import { getToken } from '../../firebaseInit';

const Notifications = props => {
  const [isTokenFound, setTokenFound] = useState(false);
  const [tokenFb, setTokenFb] = useState(false);

  // console.log('Token found', isTokenFound);

  // To load once
  useEffect(() => {
    let token;

    async function tokenFunc() {
      token = await getToken(setTokenFound);
      if (token) {
        setTokenFb(token)
        console.log('Token is', token);
      }
      return token;
    }

    tokenFunc();
  }, [setTokenFound]);

  return <div>token is {tokenFb}</div>;
};

Notifications.propTypes = {};

export default Notifications;
