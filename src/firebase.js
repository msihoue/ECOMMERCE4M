import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBfMxpv6soUoTYb6BCNwtJszfaUQAwIR2I',
    authDomain: 'malibrairie-e703c.firebaseapp.com',
    databaseURL: 'https://malibrairie-e703c.firebaseio.com',
    projectId: 'malibrairie-e703c',
    storageBucket: 'malibrairie-e703c.appspot.com',
    messagingSenderId: '478789944698',
    appId: '1:478789944698:web:0c18538e962a7d3b20c2c3',
    measurementId: 'G-2NC71JK8MF',
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
