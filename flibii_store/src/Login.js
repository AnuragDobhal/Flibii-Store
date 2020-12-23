
import React, {useState} from 'react';
import { Link ,useHistory} from 'react-router-dom'
import { auth } from './firebase';
import './Login.css'

function Login() {
    const history =useHistory();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const signIn = e => {              // Sign In Account 
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e =>    // Create an Account
    {
          e.preventDefault();

          auth 
          .createUserWithEmailAndPassword(email,password)
          .then((auth) =>{
              console.log(auth);
              if(auth)
              {
                  history.push("./")
              }
          })
          .catch(error => alert(error.message))
    }
    return (
        <div className="login" >
     <Link to="./">
            <img className="login_logo"
             src={"/flibiiLogoBlack.png"}/>
     </Link>
            <div className="login_container">
            <h1>Sign-in</h1>

            <form>
            <h5>E-mail</h5>
            <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>

            <h5>Password</h5>
            <input type="password" value={password}onChange={e=>setPassword(e.target.value)}/>
            
         <button onClick={signIn} type="submit" className="login_signInButton">Sign In</button>

<p>
        By Signing-in you agree to Flibii's Conditions of Use
        & Sale.Please
        see our Privacy Notice, our Cookies Notice and our 
        Interest-based Ads Notice.
</p>
<button onClick={register} className="login_registerButton">Create your Flibii Account</button>

            </form>

            </div>
        </div>
    )
}

export default Login
