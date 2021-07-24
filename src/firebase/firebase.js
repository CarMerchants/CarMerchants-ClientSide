import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCGJzMopHnWXQvXK0eQuzEE1USe__8jD-Y",
    authDomain: "thecarvendor-87cf6.firebaseapp.com",
    databaseURL: "https://thecarvendor-87cf6-default-rtdb.firebaseio.com",
    projectId: "thecarvendor-87cf6",
    storageBucket: "thecarvendor-87cf6.appspot.com",
    messagingSenderId: "851518361388",
    appId: "1:851518361388:web:2fdaf62840f084177ba689", 
    measurementId: "G-0C1EE5S978"
};
  
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export {firebase, database as default};


