import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {seedDatabase} from '../seed';

//we need to somehow seed the database

//we need a config here

//console.firebase.google.com

const config ={
    apiKey: "AIzaSyDyBz0SvLTI4-MKN8IIlJr2hldo4jmTL2w",
    authDomain: "netflix-cadc3.firebaseapp.com",
    databaseURL: "https://netflix-cadc3.firebaseio.com",
    projectId: "netflix-cadc3",
    storageBucket: "netflix-cadc3.appspot.com",
    messagingSenderId: "53541305184",
    appId: "1:53541305184:web:68ee77b2c466f3d200fc05"

};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export {firebase};