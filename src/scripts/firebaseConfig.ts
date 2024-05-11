import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyAm1JzUKceqGi8NTV5LSoOd7YOZLvDsLeg",
	authDomain: "gimnazija-copy.firebaseapp.com",
	projectId: "gimnazija-copy",
	storageBucket: "gimnazija-copy.appspot.com",
	messagingSenderId: "22431286972",
	appId: "1:22431286972:web:2b5cd9f5127950569572b9",
	measurementId: "G-YNYXQX81FW",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
