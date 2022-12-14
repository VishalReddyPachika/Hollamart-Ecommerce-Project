import axios from "axios";
import React, { useState } from "react";
import "./Register.css";

function Register() {
  const [userDetails, setUserDetails] = useState({
    First_Name: "",
    Last_Name: "",
    Password: "",
    Email: "",
    Phone: "",
  });
  const registerUser = async () => {
    await axios
      .post(`http://localhost:8080/users/signup`, userDetails)
      .then((res) => {
        console.log(res);
        if (res.status === 201 || res.status === 200) {
          window.alert("Registration successfull");
          window.location.href = "/";
        } else {
          window.alert(
            "Registration unsuccessful. User already exits/some input fields missing"
          );
        }
      });
  };
  const logUser = () => {
    window.location.href = "/";
  };
  const regPage = () => {
    window.location.href = "/register";
  };

  const signInPage = () => {
    window.location.href = "/signin";
  };

  const landingPage = () => {
    window.location.href = "/";
  };

  return (
    <div>
      <div className="title">
        <div onClick={landingPage}>Hollamart</div>
        <div className="navSignIn" onClick={signInPage}>
          Sign In
        </div>
        <div className="navSignUp" onClick={regPage}>
          Sign Up
        </div>
      </div>

      <div className="main-parent">
        {/* <div className="left-half-reg">
          <div className="iflogin">Want to Login?</div>
          <div className="forloginbtn">
            <button className="log-btn" onClick={logUser}>
              Login
            </button>
          </div>
        </div> */}
        <div className="right-half-reg">
          <label className="eachlabel">First Name </label>
          <div className="eachinpfield">
            <input
              name="First_Name"
              className="fname"
              onChange={(e) => {
                setUserDetails({
                  ...userDetails,
                  [e.target.name]: e.target.value,
                });
              }}
            />
          </div>
          <label className="eachlabel">Last Name </label>

          <div className="eachinpfield">
            <br />
            <input
              name="Last_Name"
              className="fname"
              onChange={(e) => {
                setUserDetails({
                  ...userDetails,
                  [e.target.name]: e.target.value,
                });
              }}
            />
          </div>
          <label className="eachlabel">Password </label>

          <div className="eachinpfield">
            <br />
            <input
              name="Password"
              type="password"
              className="fname"
              onChange={(e) => {
                setUserDetails({
                  ...userDetails,
                  [e.target.name]: e.target.value,
                });
              }}
            />
          </div>
          <label className="eachlabel">Email </label>

          <div className="eachinpfield">
            <br />
            <input
              name="Email"
              className="fname"
              onChange={(e) => {
                setUserDetails({
                  ...userDetails,
                  [e.target.name]: e.target.value,
                });
              }}
            />
          </div>
          <label className="eachlabel">Phone </label>

          <div className="eachinpfield">
            <br />
            <input
              name="Phone"
              className="fname"
              onChange={(e) => {
                setUserDetails({
                  ...userDetails,
                  [e.target.name]: e.target.value,
                });
              }}
            />
          </div>

          <div className="eachinpfield">
            <button className="forsignin-btn" onClick={registerUser}>
              Register
            </button>
          </div>
        </div>
      </div>
      <div className="regfooter-page"></div>
    </div>
  );
}

export default Register;
