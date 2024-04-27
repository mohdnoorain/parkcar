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

  // use state for vaild email id 

  const [isValid, setisValid] = useState(true);

  /// use state for valid password 
  const [validPassword, setvalidPassword] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Name : ', formData.name);
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    setvalidPassword(passwordRegex.test(formData.password));
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setisValid(emailRegex.test(formData.email));
    console.log('Email : ', formData.email);
    console.log('Password : ', formData.password);

    

  }
  const [ShowPassword, setShowPassword] = useState(false);
  let ShowPass = "show";
  let HidePass = "hide";

  const HandleShowPassword = (e: any) => {
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
                className={isValid ? 'valid' : 'invalid'}
              />
              {!isValid && <p style={{ color: 'red' }}>Please enter a valid email</p>}
            </div>
            <div className="formField">
              <input
                type={ShowPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className={validPassword ? 'valid' : 'invalid'}
              />
              <button onClick={HandleShowPassword}>
                {ShowPassword ? HidePass : ShowPass}
              </button>
              {!validPassword && <p className="InPassword" >Please enter a valid password</p>}
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

            <a href="/forgotPassword">Forgot your password?</a>
          </div>

        </form>

      </div>
    </IonPage>
  );
};

export default SignUp;
