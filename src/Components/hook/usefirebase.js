import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentrication from "../Firebase/firebase.init";

//const provider = new GoogleAuthProvider();
initializeAuthentrication();

const useFirebase=()=>{
    const[users , setUsers]=useState([]);


    const auth=getAuth();
    const signInusingGoogle=()=>{
    
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            setUsers(result.user);
        })
      

    }
    useEffect( ()=>{
  const unsubscribe=onAuthStateChanged(auth,user=>{
      if(user){
      setUsers(user)
      }
      else{
        setUsers({})
      }
  })
  return ()=>unsubscribe;
    },[])
    const logOut=()=>{
        signOut(auth)
        .then(()=>{ });
    }
    return {
        users,
        signInusingGoogle,
        logOut
        

    }
}
export default useFirebase;