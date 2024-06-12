import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const [hide1, setHide1] = useState(true);
  const [hide2, setHide2] = useState(true);

  const togglePass1 = () => {
    const togglepswd = document.getElementById("togglepswd1");

    if (hide1 === true) {
      togglepswd.classList.remove("ri-eye-off-line");
      setHide1(false);
      togglepswd.classList.add("ri-eye-line");
    } else if (hide1 === false) {
      togglepswd.classList.remove("ri-eye-line");
      setHide1(true);
      togglepswd.classList.add("ri-eye-off-line");
    }
  };

  const togglePass2 = () => {
    const togglepswd = document.getElementById("togglepswd2");

    if (hide2 === true) {
      togglepswd.classList.remove("ri-eye-off-line");
      setHide2(false);
      togglepswd.classList.add("ri-eye-line");
    } else if (hide2 === false) {
      togglepswd.classList.remove("ri-eye-line");
      setHide2(true);
      togglepswd.classList.add("ri-eye-off-line");
    }
  };

  const name = document.getElementById("name");
  const email = document.getElementById("exampleInputEmail1");
  const pass = document.getElementById("exampleInputPassword1");
  const cpass = document.getElementById("exampleInputCpassword1");
  const cnum = document.getElementById("contactNumber");

  //Validation
  const validate = () => {
    if (name.value === "") {
      alert("Enter the name");
      name.focus();
      return false;
    } else if (email.value === "") {
      alert("Enter the email address");
      email.focus();
      return false;
    } else if (pass.value === "") {
      alert("Password must not be empty");
      pass.focus();
      return false;
    } else if (cpass.value === "") {
      alert("Confirm Password must not be empty");
      cpass.focus();
      return false;
    } else if (pass.value !== cpass.value) {
      alert("Password and Confirm Password must be same");
      cpass.value = "";
      cpass.focus();
      return false;
    } else if (cnum.value === "" || cnum.value.length !== 10) {
      alert("Enter the valid Mobile number");
      cnum.focus();
      return false;
    }
    return true;
  };

  // Send Request
  const sendRequest = async () => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/user/signup`;

    const formData = new FormData();
    formData.append("name", name.value);
    formData.append("email", email.value);
    formData.append("password", pass.value);
    formData.append("contactNumber", cnum.value);

    const signupData = new URLSearchParams(formData);
    console.log(formData.name, formData.email);

    const responce = await fetch(url, {
      method: "POST",
      body: signupData,
    });
    const parsedResponce = await responce.json();
    console.log(parsedResponce);

    if (parsedResponce.success === true) {
      alert(parsedResponce.message);
      localStorage.setItem("authtoken", parsedResponce.authtoken);
      navigate("/");
    } else if (parsedResponce.success === false) {
      alert(parsedResponce.message);
      email.value = "";
    } else if (parsedResponce.errors) {
      alert(parsedResponce.errors[0].msg);
      if (parsedResponce.errors[0].msg === "Enter a valid name") {
        name.value = "";
        pass.value = "";
        cpass.value = "";
      }
      if (parsedResponce.errors[0].msg === "Enter a valid email") {
        email.value = "";
        pass.value = "";
        cpass.value = "";
      }
      if (
        parsedResponce.errors[0].msg === "Password must be atleast 5 characters"
      ) {
        pass.value = "";
        cpass.value = "";
      }
    }
  };

  const handleSignup = async (e) => {
    if (!isLoading) {
      e.preventDefault();
      const valid = validate();
      if (valid) {
        sendRequest();
      }
    }
  };

  useEffect(() => {
    localStorage.removeItem("authtoken");
    setIsLoading(false);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="signupouter d-flex justify-content-center">
        <div className="signupbox d-flex flex-column ">
          <div className="signuptext">
            <div className="signup">
              <h3>
                <b>Sign up</b>
              </h3>
            </div>
            <div className="signupform">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control transperent "
                    placeholder=""
                    id="name"
                    autoComplete="current-usename"
                    style={{ color: "white" }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control transperent"
                    id="exampleInputEmail1"
                    autoComplete="current-email"
                    style={{ color: "white" }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <div className="pswd d-flex align-items-center">
                    <input
                      type={hide1 ? "password" : "text"}
                      className="form-control transperent pswd"
                      id="exampleInputPassword1"
                      autoComplete="current-password"
                      style={{ color: "white" }}
                    />
                    <i
                      id="togglepswd1"
                      className="ri-eye-off-line"
                      onClick={togglePass1}
                    ></i>
                  </div>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputCpassword1"
                    className="form-label"
                  >
                    Confirm Password
                  </label>
                  <div className="pswd d-flex align-items-center">
                    <input
                      type={hide2 ? "password" : "text"}
                      className="form-control transperent pswd"
                      id="exampleInputCpassword1"
                      autoComplete="current-password"
                      style={{ color: "white" }}
                    />
                    <i
                      id="togglepswd2"
                      className="ri-eye-off-line"
                      onClick={togglePass2}
                    ></i>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="contactNumber" className="form-label">
                    Mobile Number
                  </label>
                  <input
                    type="number"
                    maxLength={"10"}
                    className="form-control transperent"
                    id="contactNumber"
                    // maxLength="10"
                    autoComplete="current-cnumber"
                    style={{ color: "white" }}
                  />
                </div>
                <button
                  className="formbtn btn bg-custom-clr1"
                  onClick={handleSignup}
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
