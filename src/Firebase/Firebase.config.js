// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4b0242oN0YvsJPWkbb0Rz383nexqMcGY",
  authDomain: "my-project-1530687339910.firebaseapp.com",
  projectId: "my-project-1530687339910",
  storageBucket: "my-project-1530687339910.firebasestorage.app",
  messagingSenderId: "1098201730658",
  appId: "1:1098201730658:web:2eed1102697cec55304b3b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
