import React from "react";
import './styling.css';
import {BsFillEnvelopeAtFill,BsApple } from "react-icons/bs";
import {BiSolidLockAlt} from "react-icons/bi"
import {FcGoogle} from "react-icons/fc"



const Signup = () => {
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

          <div className="flex-column">
            <label>Confirm Password</label>
          </div>
          <div className="inputForm">
            <BiSolidLockAlt/>
            <input type="password" className="input" placeholder="Confirm your Password" />
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
            Alredy have an account? <span className="span">Login</span>
          </p>
          <p className="p line">Or With</p>
    
          <div className="flex-row">
            <button className="btn google" >
             <FcGoogle size={20}/>
              Google
              
            </button>
            <button className="btn apple">
                <BsApple size={20}/>
              Apple
            </button>
          </div>
        </form>
    );
};

export default Signup;