import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider} from "firebase/auth";
import { getStorage} from "firebase/storage";


const firebaseConfig = {
        

        apiKey:process.env.REACT_APP_API_KEY,
        authDomain:process.env.REACT_APP_AUTH_DOMAIN,
        databaseURL:process.env.REACT_APP_DATABASEURL,
        projectId:process.env.REACT_APP_PROJECT_ID,          
  storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId:process.env.REACT_APP_ID,
  measurementId:process.env.REACT_APP_MEASUREMENTID,
   

};
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage();

// 2) when seeding the database you'll have to uncomment this!





export { auth, provider, storage };
export default db;



/*
 apiKey:process.env.REACT_APP_API_KEY,
        authDomain:process.env.REACT_APP_AUTH_DOMAIN,
        projectId:process.env.REACT_APP_PROJECT_ID,
        storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
        messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID,
        appId:process.env.REACT_APP_ID,
        measurementId:process.env.REACT_APP_MEASUREMENTID,
*/