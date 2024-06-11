import React, { useState } from "react";

const Signup = () => {
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
                    style={{ color: "white" }}
                  />
                </div>
                <button className="formbtn btn bg-custom-clr1">Sign up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
