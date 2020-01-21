import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAPTbM7MSr9B9N_uXG2bCCs85-T89jD2Uw",
  authDomain: "recette-d101e.firebaseapp.com",
  databaseURL: "https://recette-d101e.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base;
