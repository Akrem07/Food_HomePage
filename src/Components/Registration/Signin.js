import React,{useState,useEffect} from "react";
import {auth,provider} from "./Config";
import {signInWithPopup} from 'firebase/auth';
import First from "./First";



const Signin = () => {
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
        <div>
            {Value?<First/>:<button onClick={HandleClick}>sigin with google</button>}
        </div>
    )
};

export default Signin;