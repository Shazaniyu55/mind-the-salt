import { initializeApp } from "firebase/app";
import {getFirestore,collection} from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCvGXgSEtCtmXa64RyPR-KPQPU5p-IxPig",
  authDomain:"heart-africa.firebaseapp.com",
  projectId:"heart-africa",
  storageBucket:"heart-africa.appspot.com",
  messagingSenderId:"37646085190",
  appId:"1:37646085190:web:3a431d7cd73573407a2e47",
  measurementId: "G-QCQCC7Z1CF"
};
// Initialize Firebase Initialize Firebase
const app=initializeApp(firebaseConfig,"heart-africa");

// Get a Firestore instance
const db = getFirestore(app);
const storage=getStorage(app);
const getCollectionProps:(collectionName:string)=>any=(collectionName:string)=>{
return collection(db,collectionName);
}
export {db,app,getCollectionProps,storage};