// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAwrU8bvp8c1pyIisHD_wcvfOS_6NurjPY',
  authDomain: 'spend-calculator-staging.firebaseapp.com',
  databaseURL: 'https://spend-calculator-staging-default-rtdb.firebaseio.com',
  projectId: 'spend-calculator-staging',
  storageBucket: 'spend-calculator-staging.appspot.com',
  messagingSenderId: '195248731316',
  appId: '1:195248731316:web:4b84c6568881f95df353e1',
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

// Initialize Firebase

export default db;
