import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyCzIlSaLXBtxWyAxG_NoLq4YYg9sqv7QRc",
  authDomain: "netflix-clone-da71e.firebaseapp.com",
  projectId: "netflix-clone-da71e",
  storageBucket: "netflix-clone-da71e.appspot.com",
  messagingSenderId: "36362236200",
  appId: "1:36362236200:web:14d99270aca1b64e40201d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth}
export default db;