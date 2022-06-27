import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyA81bIsacrSTszCpkvlmuHGuc7OZY7HQM0",
  authDomain: "g7deliveryfood.firebaseapp.com",
  databaseURL: "https://g7deliveryfood-default-rtdb.firebaseio.com",
  projectId: "g7deliveryfood",
  storageBucket: "g7deliveryfood.appspot.com",
  messagingSenderId: "166223126074",
  appId: "1:166223126074:web:a5fd35a7228b40104cdf03"
};

firebase.initializeApp(firebaseConfig);

export default firebase;