import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
   apiKey: 'AIzaSyBBwgQbhc0TwpYimu_yO9PyWXJJ07Tfpls',
   authDomain: 'pi-zadaca-9dbdf.firebaseapp.com',
   projectId: 'pi-zadaca-9dbdf',
   storageBucket: 'pi-zadaca-9dbdf.appspot.com',
   messagingSenderId: '665095292121',
   appId: '1:665095292121:web:52e43acf57424bfc49aac8',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();

export { firebase, db, storage };
