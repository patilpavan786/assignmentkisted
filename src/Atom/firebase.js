
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const myApp=firebase.initializeApp({
    apiKey: "AIzaSyB3vMOsSaTOR6n2WUH4-z8LI1ZtIPMd0Lk",
  authDomain: "my-first-project-e84e1.firebaseapp.com",
  projectId: "my-first-project-e84e1",
  storageBucket: "my-first-project-e84e1.appspot.com",
  messagingSenderId: "777075704028",
  appId: "1:777075704028:web:754de601a2033de2afb419"
})

export const auth=firebase.auth()
const googleProvider=new firebase.auth.GoogleAuthProvider()

export const signInWithGoogle= ()=> {
    auth.signInWithPopup(googleProvider).then((res)=>{
        console.log(res.user)
    }).catch((error)=>{
        console.log(error.message);
    })
}