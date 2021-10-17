import { useState } from 'react'

import Notification from './components/Notifications/Notifications'
import ReactNotificationComponent from './components/Notifications/ReactNotification'
import { onMessageListener } from './firebaseInit'

import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: '', body: '' });

  onMessageListener()
    .then(payload => {
      setShow(true);
      setNotification({
        title: payload.notification.title,
        body: payload.notification.body,
      });
    })
    .catch(err => console.log('failed: ', err));


  return (
    <div className="App">
      {show ? (
        <ReactNotificationComponent title={notification.title} body={notification.body} />
      ) : (
        <></>
      )}

      <Notification />

      Test notification
    </div>
  );
}

export default App;
