// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCaKgGvapUtbvY55rTnaPuPxgJy53LVDa4",
    authDomain: "project-managementsapp.firebaseapp.com",
    projectId: "project-managementsapp",
    storageBucket: "project-managementsapp.appspot.com",
    messagingSenderId: "432140392163",
    appId: "1:432140392163:web:02de57d7eb47af0628d7d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;