import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [hide, setHide] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const togglePass = () => {
    const togglepswd = document.getElementById("togglepswd");

    if (hide === true) {
      togglepswd.classList.remove("ri-eye-off-line");
      setHide(false);
      togglepswd.classList.add("ri-eye-line");
    } else if (hide === false) {
      togglepswd.classList.remove("ri-eye-line");
      setHide(true);
      togglepswd.classList.add("ri-eye-off-line");
    }
  };

  const email = document.getElementById("exampleInputEmail1");
  const pass = document.getElementById("exampleInputPassword1");

  // Validator
  const validate = (email, pass) => {
    if (email.value === "") {
      alert("Enter the email address");
      email.focus();
      return false;
    } else if (pass.value === "") {
      alert("Passwords is required");
      pass.focus();
      return false;
    }
    return true;
  };

  // Send Request
  const sendRequest = async (email, pass) => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/user/login`;

    const formdata = new FormData();
    formdata.append("email", email.value);
    formdata.append("password", pass.value);
    const loginData = new URLSearchParams(formdata);

    const responce = await fetch(url, {
      method: "POST",
      body: loginData,
    });
    const parsedResponce = await responce.json();

    if (parsedResponce.success === true) {
      alert(parsedResponce.message);
      localStorage.setItem("authtoken", parsedResponce.authtoken);
      window.location.href = "/";
    } else if (parsedResponce.success === false) {
      alert(parsedResponce.message);
      email.value = "";
      pass.value = "";
    } else if (parsedResponce.errors) {
      alert(parsedResponce.errors[0].msg);
      email.value = "";
      pass.value = "";
    }
  };

  const handleLogin = (e) => {
    if (!isLoading) {
      e.preventDefault();
      const valid = validate(email, pass);
      if (valid) {
        sendRequest(email, pass);
      }
    }
  };

  useEffect(() => {
    localStorage.removeItem("authtoken");
    setIsLoading(false);
  }, []);

  return (
    <div>
      <div className="loginouter d-flex justify-content-center">
        <div className="loginbox d-flex flex-column ">
          <div className="logintext">
            <div className="login">
              <h3>
                <b>Log in</b>
              </h3>
            </div>
            <div className="loginform">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control transperent"
                    id="exampleInputEmail1"
                    autoComplete="current-usename"
                    style={{ color: "white" }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <div className="pswd d-flex align-items-center">
                    <input
                      type={hide ? "password" : "text"}
                      className="form-control transperent pswd"
                      id="exampleInputPassword1"
                      autoComplete="current-password"
                      style={{ color: "white" }}
                    />
                    <i
                      id="togglepswd"
                      className="ri-eye-off-line"
                      onClick={togglePass}
                    ></i>
                  </div>
                </div>
                <button
                  id="loginbtn"
                  className="formbtn btn bg-custom-clr1"
                  onClick={handleLogin}
                >
                  Log in
                </button>
                <div className="signup">
                  <p>
                    Don't have an account?{" "}
                    <Link className="text-custom-clr3" to="/signup">
                      {" "}
                      Sign up
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
