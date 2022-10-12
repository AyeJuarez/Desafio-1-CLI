import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBAEfk8pczMs5Nk1HgINtvJZFLP2Z0h3AU",
    authDomain: "coderhouse-ecommerce-91334.firebaseapp.com",
    projectId: "coderhouse-ecommerce-91334",
    storageBucket: "coderhouse-ecommerce-91334.appspot.com",
    messagingSenderId: "701081437698",
    appId: "1:701081437698:web:9bc491b8d758b48132891b"
};



const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);

