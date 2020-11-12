import firebase from 'firebase/app';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyApJxLPTt8KuYdErgbV_yqOy0cPY7_vAZw",
    authDomain: "crm-react-b12d3.firebaseapp.com",
    databaseURL: "https://crm-react-b12d3.firebaseio.com",
    projectId: "crm-react-b12d3",
    storageBucket: "crm-react-b12d3.appspot.com",
    messagingSenderId: "236838375779",
    appId: "1:236838375779:web:ad7f1a3894d92ce4530356",
    measurementId: "G-ERVZSTD0BV"
};

firebase.initializeApp(config);

export default firebase;