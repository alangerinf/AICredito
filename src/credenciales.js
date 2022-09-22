// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClqgKgl-59d0KXq-sCfsvZoQT1TGQqEWA",
  authDomain: "aicredito.firebaseapp.com",
  projectId: "aicredito",
  storageBucket: "aicredito.appspot.com",
  messagingSenderId: "240247139070",
  appId: "1:240247139070:web:352e22dc82e8a27c0a53af",
  measurementId: "G-Z1FQZC05BY"
};

// Initialize Firebase
const appFirebaseAiCredito = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebaseAiCredito);

export default appFirebaseAiCredito;