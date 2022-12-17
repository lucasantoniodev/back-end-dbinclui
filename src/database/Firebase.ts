import firebase from "firebase-admin";
import { applicationDefault } from "firebase-admin/app";


export const firebaseApp = firebase.initializeApp({
  credential: applicationDefault(),
  databaseURL: "https://learning-firebase-36d1b-default-rtdb.firebaseio.com"
});

export const firebaseAuth = firebaseApp.auth();