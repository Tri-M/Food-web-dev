import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDo4Ule6OW8vwpQCuYgq93dt1DtEJlNJSQ",
  authDomain: "restaurantapp-e819c.firebaseapp.com",
  databaseURL: "https://restaurantapp-e819c-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-e819c",
  storageBucket: "restaurantapp-e819c.appspot.com",
  messagingSenderId: "894882860131",
  appId: "1:894882860131:web:3b1e87a4c4cc108c457c56"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore=getFirestore(app);
  const storage=getStorage(app);
 export {app,firestore,storage};
