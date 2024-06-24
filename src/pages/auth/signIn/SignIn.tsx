import { IonLoading, IonPage, useIonToast } from "@ionic/react";
import "./SignIn.scss";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
const SignIn= () => {
  const [Apimessage, setApimesage] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const [isValidEmail, setisValidEmail] = useState(true);
  const [isvalidPassword, setvalidPassword] = useState(true);  /// use state for valid password 
  const [present] = useIonToast();
  
  const history = useHistory()
  // use state for taking input of user
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  /// use state for vaild Email 

  const presentToast = (position: "top" | "middle" | "bottom",message:string="") => {
    console.log("this is loading calling ")
    present({
      message: Apimessage,
      duration: 2000,
      position: position,
      cssClass: "custom-toast",
    });
  };


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
    const UserData = {
      email: formData.email,
      password: formData.password,
    };
    setIsloading(true);
    axios
      .post("https://expressbe.onrender.com/api/v1/auth/sign-in", UserData)
      .then((response) => {
        setIsloading(false);

        console.log("signp res:", response.status, response.data);
        setApimesage(response.data.message);

        if (response.status === 200) {
        
          presentToast("top","");
        } else {
          history.push("/OtpPage");
        }
      })
      .catch((error) => {
        setIsloading(false);
      });
    
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
            <IonLoading
              isOpen={isLoading}
              message="Loading..."
              className="custom-loading" // Apply the custom class here
            />
            <a href="/forgotPassword">Forgot your password?</a>
          </div>
        </form>
      </div>
    </IonPage>
  );
};

export default SignIn;
