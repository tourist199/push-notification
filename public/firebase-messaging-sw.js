/* eslint-disable no-undef */
// Import the functions you need from the SDKs you need
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    // icon: '/logo192.png',
  };

  // eslint-disable-next-line no-restricted-globals
  return self.registration.showNotification(notificationTitle, notificationOptions);
});
