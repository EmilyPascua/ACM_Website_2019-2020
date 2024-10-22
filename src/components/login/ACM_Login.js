import React from "react";
import './ACM_Login.scss';
import { useState } from "react";
import { auth } from "../professional-events/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";

// the two logo images here
import ConstitutionLogo from "./images/logo.png"
import acmLogo from "./images/acmlogo.png"

const ACM_Login = () => {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const history = useHistory();
    
    const handleRegister = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) =>  {
            console.log('Login Successfully');
            history.push("./ACM_admin");
        })
        .catch((error) => {
            alert("You have entered wrong credentials");
        });
    };

    {/* Some of the class names have 2 in the name because the things i added here wouls sometimes
        mess up the stuff in the main page
        
        If anything weird that i didn't catch in the main page changes it would probably be here
        */}

    return (
        <><div className="headerlogo2">
            <img src={acmLogo} alt="This is the acm Logo" className="headerlogo2" />
        </div><div className="loginPage2">
                <div className="outerBox">
                    <div className="innerBox">

                        <div className="logo2">
                            <img src={ConstitutionLogo} alt="This is the Constitution Logo" className="logoImage2" />
                        </div>

                        <h className="adminLogin">Admin Login</h>
                        <form onSubmit={handleRegister} className="loginContainer">
                            <label htmlFor="email" className="formText">Email</label>
                            <input
                                type="email"
                                className="textBox"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                placeholder="Enter your Email"/>

                            <label htmlFor="password" className="formText">Password</label>
                            <input
                                type="password"
                                className="textBox"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                placeholder="Enter your Password" />
                            <button className="button" type="submit">Login</button>
                        </form>
                    </div>
                </div>

        {/* this was ripped from the footerCarousel. Had to change some things to make it work */}
        <div className="container-container">
            <div className="row bottom-container">
                <div className="col-sm footer-text">
                    <div className="lower footer-text">
                    <span className="footer-catchy-text2">

                    {/* This is the same as the footer in main page */}
                     It's not a bug.{" "}
                     <span className="highlight-text">
                        <b>
                            <i>It's a feature.</i>
                        </b>
                     </span>
                </span>
              <br></br>
              <b className="copy-right">
                © Association of Computing Machinery - California State
                University, Los Angeles.
              </b>
              <br></br>
              <br></br>
            </div>
          </div>
        </div>

      </div>
    </div></>
    );
};

export default ACM_Login;

{/* Below is the old code used for the old simple login page, 
I left it here as a just in case -JV */}

{/*
import React from "react";
import './ACM_Login.scss';
import { useState } from "react";
import { auth } from "../professional-events/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom"; 
const ACM_Login = () => {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const history = useHistory();
    const handleRegister = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) =>  {
            //sighned in
            console.log('Loging Successfully');
            history.push("./ACM_admin");
        })
        .catch((error) => {
            alert("Wrong credentials")
            const errorCode = error.code;
            const errorMessage = error.message;
        }) ;
    };
    return(
        <div>
            <div className="header">
                <h1>LOGIN</h1>
                <form onSubmit={handleRegister} className="loginContainer">
                    <label htmlFor="email" className="formText" style={{color: "white"}}>Email</label>
                    <input type="email" className="textBox" onChange={(e)=>(setEmail(e.target.value))} value={email}/>
                    <label htmlFor="password" className="formText">Password</label>
                    <input type="password" className="textBox" onChange={(e)=>(setPassword(e.target.value))} value={password}/>
                    <button className="btn btn-primary my-2" type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}
export default ACM_Login;
*/}