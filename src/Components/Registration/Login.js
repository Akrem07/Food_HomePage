import React,{useState,useEffect} from "react";
import {auth,provider} from "./Config";
import {signInWithPopup} from 'firebase/auth';
import Home from "../Home/Home";
import './styling.css';
import {BsFillEnvelopeAtFill,BsApple } from "react-icons/bs";
import {BiSolidLockAlt} from "react-icons/bi"
import {FcGoogle} from "react-icons/fc"
import First from "../Registration/First";



const Login = () => {

  
  const [Value, setValue] = useState('')
  const HandleClick = () => {
      signInWithPopup(auth,provider).then((data) =>{
          setValue(data.user.email)
          localStorage.setItem("email",data.user.email)
      })
  };

  useEffect(() => {
      const email = localStorage.getItem("email")
      setValue(email)
  }, [])


  return (
      <form className="form">
        <div className="flex-column">
          <label>Email</label>
        </div>
        <div className="inputForm">
          <BsFillEnvelopeAtFill/>
          <input type="text" className="input" placeholder="Enter your Email" />
          
        </div>
  
        <div className="flex-column">
          <label>Password</label>
        </div>
        <div className="inputForm">
          <BiSolidLockAlt/>
          <input type="password" className="input" placeholder="Enter your Password" />
        </div>
  
        <div className="flex-row">
          <div>
            <input type="checkbox" />
            <label>Remember me</label>
          </div>
          <span className="span">Forgot password?</span>
        </div>
  
        <button className="button-submit">Sign In</button>
        <p className="p">
          Don't have an account? <span className="span">Sign Up</span>
        </p>
        <p className="p line">Or With</p>
  
        <div className="flex-row">
          {Value?<First/>:<button className="btn google" onClick={HandleClick}> <FcGoogle size={20}/> Google </button>}
          <button className="btn apple">
          <BsApple size={20}/>
            Apple
          </button>
        </div>
      </form>
  );
};

export default Login;


