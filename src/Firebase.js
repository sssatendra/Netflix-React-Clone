import firebase from 'firebase';


const firebaseConfig = {
 // Your firebase config here
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth}
export default db;
