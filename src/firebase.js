import firebase from 'firebase/app';
import 'firebase/firestore';


const config = {
    apiKey: "Your api key",
    authDomain: "Your auth domain",
    databaseURL: "Your Url's database",
    projectId: "Your project's id",
    storageBucket: "Storage Bucket",
    messagingSenderId: "MessagingSenderId",
    appId: "App's ID",
    measurementId: "Measurement ID"
};

firebase.initializeApp(config);

export default firebase;            
