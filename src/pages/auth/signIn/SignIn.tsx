import { IonPage } from "@ionic/react";
import "./SignIn.scss";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
const SignIn= () => {

  const history = useHistory()
  // use state for taking input of user
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  /// use state for vaild Email 

  const [isValidEmail, setisValidEmail] = useState(true);

  /// use state for valid password 
  const [isvalidPassword, setvalidPassword] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Email : ', formData.email);
    console.log('Password : ', formData.password);
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    setvalidPassword(passwordRegex.test(formData.password));
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setisValidEmail(emailRegex.test(formData.email));
    
    // history.push('')
  };
  const [ShowPassword, setShowPassword] = useState(false);
  let ShowPass = "show";
  let HidePass = "hide";

  const HandleShowPassword = (e: any) => {
    e.preventDefault()
    setShowPassword(!ShowPassword);
  };
  return (
    <IonPage className="SignInPage">
      <div className="pageContent">
        <div className="pHeading">
          <div>&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;</div>
          <h1>Log In</h1>
          <a href="/signUp"><button>Sign Up</button></a>
        </div>

        <form onSubmit={handleSubmit} className="formContent">
          {/* topform  */}
          <div className="topForm">
            <div className="formField">
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={isValidEmail ? 'valid' : 'invalid'}
              />
              {!isValidEmail && <p style={{ color: 'red' }}>Please enter a valid email</p>}
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
              {!isvalidPassword && <p className="InPassword" >Please enter a valid password</p>}
            </div>
          </div>
          {/* bottom form  */}
          <div className="bottomForm">
            <button className="submitBtn" type="submit">
              Log In
            </button>

            <a href="/forgotPassword">Forgot your password?</a>
          </div>
        </form>
      </div>
    </IonPage>
  );
};

export default SignIn;
