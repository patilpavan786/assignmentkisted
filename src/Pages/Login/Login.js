import React ,{useEffect,useState}from 'react'
import style  from "./Login.module.css"
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';
import Custombutton from '../../Atom/Custombutton/Custombutton'
import Custominput from '../../Atom/Custominput/Custominput';
import {auth ,signInWithGoogle } from "../../Atom/firebase";
import { useNavigate } from 'react-router-dom';
function Login() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = React.useState(user?._delegate.email);
  const [password, setPassword] = React.useState(user?._delegate.refreshToken);
  let nevigate = useNavigate()
  console.log(email)
  useEffect(()=>{
    auth.onAuthStateChanged(async (users)=>{
      
      // console.log(users._delegate.email,'hello');
      // nevigate("/Home")
      // if(users.length != 0) {
        // setEmail(users._delegate.email)
        // setPassword(users._delegate.refreshToken)
      // }
      setUser(users)
    })
  },[email,password])
const signoutWithGoogle=()=>{
  auth.signOut().then(()=>{
    setUser(null)
  })
  setEmail("")
  setPassword("")
}
  function handlesubmit(){
    alert("welcome ")
    nevigate("/Home")
  }
  return (
    <div className={style.main}>
        <div className={style.left}>
             <h1>Board</h1>
        </div>
        <div className={style.right}>
            <div className={style.signin}>
              <h1>Sign In</h1>
             <h4>Sign in to your account</h4>
            </div>
            <div className={style.btnmain}>
               {user ===null ? ( <Custombutton text='Sign in with Google' icon={<FcGoogle/>} className={style.gbtn} onClick={signInWithGoogle}/>):
             ( <Custombutton text='Sign out from google' icon={<FcGoogle/>} className={style.gbtn} onClick={signoutWithGoogle}/>)}
                <Custombutton text='Sign in with Apple' icon={<BsApple/>} className={style.gbtn}/>
            </div>
            <div className={style.form}>
                <h4>Email address</h4>
                <Custominput type="email" placeholder="Email" className={style.input} value={email}/>
                <h4>Password</h4>
                <Custominput type="password" placeholder="Password" className={style.input} value={password}/>
                <h4>Forgot Password</h4>
                <Custombutton text='Sign In'  className={style.sbtn} onClick={()=>handlesubmit()}/>
                
            </div>
            <div>
                <p>Don't have an account? <a href='/'>Register here</a> </p>
            </div>
            
        </div>

      
    </div>
  )
}

export default Login
