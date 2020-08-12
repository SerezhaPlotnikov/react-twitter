import firebase from "firebase";
import "@firebase/firestore";
import ReduxSagaFirebase from "redux-saga-firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBZly9j_e7j_YWnAdKlQepCKmEHvqdLFV4",
	authDomain: "test-twitter-167d7.firebaseapp.com",
	databaseURL: "https://test-twitter-167d7.firebaseio.com",
	projectId: "test-twitter-167d7",
	storageBucket: "test-twitter-167d7.appspot.com",
	messagingSenderId: "892406353068",
	appId: "1:892406353068:web:33f9046415340fab2fa309",
	measurementId: "G-3MRWLEBFGW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = new ReduxSagaFirebase(firebaseApp);

export default db;
