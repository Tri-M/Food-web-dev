import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCw2fvAtdJ8ahKqWvdrMp5A3GPk-_lnfT0",
    authDomain: "restaurantapp-d1fc0.firebaseapp.com",
    databaseURL: "https://restaurantapp-d1fc0-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-d1fc0",
    storageBucket: "restaurantapp-d1fc0.appspot.com",
    messagingSenderId: "514111016508",
    appId: "1:514111016508:web:01144fff28ca68cfe87d39"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore=getFirestore(app);
  const storage=getStorage(app);
 export {app,firestore,storage};