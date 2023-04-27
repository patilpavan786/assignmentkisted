import React ,{useEffect,useState}from 'react';
import style from "./Login.module.css";
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';
import Custombutton from '../../Atom/Custombutton/Custombutton';
import Custominput from '../../Atom/Custominput/Custominput';
import {auth ,signInWithGoogle } from "../../Atom/firebase";
import { useNavigate } from 'react-router-dom';

function Login() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  let nevigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((users) => {
      setUser(users);
    });

    return unsubscribe;
  }, []);

  const signOutWithGoogle = () => {
    auth.signOut().then(() => {
      setUser(null);
    });
  };

  function handlesubmit() {
    
    if(user != null && email != null  && password != null){
      alert("welcome ");
      nevigate("/Home");
    }
   
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
          {user === null ? (
            <Custombutton text="Sign in with Google" icon={<FcGoogle />} className={style.gbtn} onClick={signInWithGoogle} />
          ) : (
            <Custombutton text="Sign out from Google" icon={<FcGoogle />} className={style.gbtn} onClick={signOutWithGoogle} />
          )}
          <Custombutton text="Sign in with Apple" icon={<BsApple />} className={style.gbtn} />
        </div>
        <div className={style.form}>
          <h4>Email address</h4>
          <Custominput type="email" placeholder="Email" className={style.input} value={user ? user.email : email} />
          <h4>Password</h4>
          <Custominput type="password" placeholder="Password" className={style.input} value={user ? user.refreshToken : password} />
          <h4>Forgot Password</h4>
          <Custombutton text="Sign In" className={style.sbtn} onClick={() => handlesubmit()} />

        </div>
        <div>
          <p>Don't have an account? <a href="/">Register here</a> </p>
        </div>

      </div>


    </div>
  );
}

export default Login;
