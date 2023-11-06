
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCcPf5YqPRQ5ZYGLmuldmZof81hUCPRTrU",
  authDomain: "react-http-743c7.firebaseapp.com",
  databaseURL: "https://react-http-743c7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-http-743c7",
  storageBucket: "react-http-743c7.appspot.com",
  messagingSenderId: "22193709725",
  appId: "1:22193709725:web:acc84b18fd9bc0750a6a74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};

export default firebaseConfig;