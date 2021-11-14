import firebase from 'firebase'
require('firebase/firestore')
require('firebase/storage')

var firebaseConfig = {
    apiKey: "AIzaSyDpZUcCkuSN4Czwcfci-_TKfOEjZOEZ56w",
    authDomain: "tkd-jale-website.firebaseapp.com",
    databaseURL: "https://tkd-jale-website.firebaseio.com",
    projectId: "tkd-jale-website",
    storageBucket: "tkd-jale-website.appspot.com",
    messagingSenderId: "1017444954435",
    appId: "1:1017444954435:web:e7dc8c8b7898c9e81e7ff6",
    measurementId: "G-SRVEFEZR42"
  };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export const fb = firebase.app();
export const db = firebase.firestore();
export const admin = firebase.admin;
