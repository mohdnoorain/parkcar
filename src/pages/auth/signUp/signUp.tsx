import { IonPage } from "@ionic/react";
import "./SignUp.scss";
import React from "react";
import { useState } from "react";

const SignUp: React.FC = () => {
  // use state for taking input of user
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('FD', formData);
  }
  const [ShowPassword, setShowPassword] = useState(false);
  let ShowPass = "show";
  let HidePass = "hide";

  const HandleShowPassword = (e:any) => {
   e.preventDefault();
    setShowPassword(!ShowPassword);
  }

  return (
    <IonPage className="SignUpPage">
      <div className="pageContent">

        <div className="pHeading">
          <div>&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;</div>
          <h1>Sign Up</h1>
          <a href="/signIn"><button>Log in</button></a>
        </div>

        <form onSubmit={handleSubmit} className="formContent">
          {/* topform  */}
          <div className="topForm">
            <div className="formField">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="formField">
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="formField">
              <input
                type={ShowPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              <button onClick={HandleShowPassword}>
                {ShowPassword ? HidePass : ShowPass}
              </button>
            </div>
          </div>
          {/* bottom form  */}
          <div className="bottomForm">
            <div className="checkBox">
              <input
                id="terms"
                type="checkbox"
              />
              <label htmlFor="terms">
                I would like to receive your newsletter and other promotional information.
              </label>
            </div>
            <button className="submitBtn" type="submit">
              Sign Up
            </button>

            <a href="">Forgot your password?</a>
          </div>

        </form>

      </div>
    </IonPage>
  );
};

export default SignUp;
