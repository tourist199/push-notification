import firebase from "firebase/app";

import "firebase/messaging";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkkullot0u4AAjicXCshk-r86Yyu7gv3A",
  authDomain: "push-noti-12099.firebaseapp.com",
  projectId: "push-noti-12099",
  storageBucket: "push-noti-12099.appspot.com",
  messagingSenderId: "44145516322",
  appId: "1:44145516322:web:752a11d4e3a792cfaacf7b",
  measurementId: "G-ZY4KEBEC6K",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

const { REACT_APP_VAPID_KEY } = process.env;
const publicKey = REACT_APP_VAPID_KEY;

export const getToken = async (setTokenFound) => {
  let currentToken = "";

  try {
    currentToken = await messaging.getToken({ vapidKey: publicKey });
    if (currentToken) {
      console.log('token is ', currentToken);
      setTokenFound(true);
    } else {
      setTokenFound(false);
    }
  } catch (error) {
    console.log("An error occurred while retrieving token. ", error);
  }

  return currentToken;
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });
