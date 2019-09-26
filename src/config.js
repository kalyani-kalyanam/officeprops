import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';


const Config = {
  apiKey: "AIzaSyDqU1p-XGCg_ydg1j7jBcW0i85xVmbtCJ0",
  authDomain: "officepros-4b868.firebaseapp.com",
  databaseURL: "https://officepros-4b868.firebaseio.com",
  projectId: "officepros-4b868",
  storageBucket: "officepros-4b868.appspot.com",
  messagingSenderId: "909264027616",
  appId: "1:909264027616:web:94c9b3038e01bfbbc27585"
 
  };
  
 


firebase.initializeApp(Config);

export default firebase;