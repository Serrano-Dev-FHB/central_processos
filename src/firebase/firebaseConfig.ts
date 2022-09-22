import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDsOJgeGv0Dtd6sthmC8mmPU6ShC70KoX0",
    authDomain: "fir-c2d7f.firebaseapp.com",
    databaseURL: "https://fir-c2d7f-default-rtdb.firebaseio.com",
    projectId: "fir-c2d7f",
    storageBucket: "fir-c2d7f.appspot.com",
    messagingSenderId: "20234071714",
    appId: "1:20234071714:web:f5ab6d06439c7a133bb1fb"
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);