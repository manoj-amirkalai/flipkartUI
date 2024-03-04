import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import './loginModal.css'
import supabase from '../../Pages/supabase'
import { useDispatch } from "react-redux";
import {setUser} from '../../Slices/userSlices'


const LoginModal = ({ isOpen, setIsOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginType, setLoginType] = useState(true);
  const dispatch=useDispatch()

  const signup = async () => {
    console.log("signedin");
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if(data.user){
      alert("Acoount Created.Please Check the mail and confrim")
    }
    console.log(data, error);
  };

  const login = async () => {
    console.log("logedin");
    const { data, error } =  await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log(data);
    if(error){
      alert(error?.message)
      return
    }
    dispatch(setUser(data.user))
  };


  return isOpen ? (
    <div className="overlay">
      <div className="LoginModel">
        <div className="left">
          <div className="left-container">
            <p className="Login-title">login </p>
            <p className="login-des">  Get access to your Orders, Wishlist and Recommendations</p>
          </div>
        </div>
        <div className="right">
          <input
            type="email"
            className="Login-input"
            placeholder="Enter E-mail ID"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="Login-input"
            placeholder="Enter password"
            required
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <p className="termsandcon">
            By continuing, you agree to Flipkart's{" "}
            <span style={{ color: "blue" }}>Terms of Use</span> and
            <span style={{ color: "blue" }}> Privacy Policy.</span>{" "}
          </p>
          {loginType ? (
            <button className="Login-btn" onClick={login} >Log-in</button>
          ) : (
            <button className="Login-btn" onClick={signup}>Sign-up</button>
          )}{" "}
          {loginType ? (
            <p className="Login-signup" onClick={() => setLoginType(false)}>
              New to Flipkart? Create an account
            </p>
          ) : (
            <p className="Login-signup" onClick={() => setLoginType(true)}>
              Already an user? Login to an account
            </p>
          )}
        </div>{" "}
        <div className="close" onClick={() => setIsOpen(false)}>
          <RxCross2 />
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default LoginModal;
