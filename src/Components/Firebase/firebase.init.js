import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.Config";
 
const initializeAuthentrication=()=>{
    initializeApp(firebaseConfig)
}
export default initializeAuthentrication;