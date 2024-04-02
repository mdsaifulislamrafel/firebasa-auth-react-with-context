// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD67Q16FFsO1Ch16ZtgyjW89vsMX81-4DQ",
    authDomain: "firebasa-auth-7a43d.firebaseapp.com",
    projectId: "firebasa-auth-7a43d",
    storageBucket: "firebasa-auth-7a43d.appspot.com",
    messagingSenderId: "887189268574",
    appId: "1:887189268574:web:b25808f115a9b0bfbc2ccf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);