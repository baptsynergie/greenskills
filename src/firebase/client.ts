import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCE_jYeDJupTNokBi5fPupSxPBR9tBbzYQ",
    authDomain: "greenskills-ba9a4.firebaseapp.com",
    projectId: "greenskills-ba9a4",
    storageBucket: "greenskills-ba9a4.appspot.com",
    messagingSenderId: "106068837967",
    appId: "1:106068837967:web:8a51f1178e5837436b8c3a",
    measurementId: "G-ZZC93LLLS4"
  };

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);