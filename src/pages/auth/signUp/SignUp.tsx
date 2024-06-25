import { IonCheckbox, useIonToast, IonPage, IonLoading } from "@ionic/react";
import "./SignUp.scss";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignUp = () => {
  // use state for taking input of user
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [isLoading, setIsloading] = useState(false);
  const [existUser, setexistUser] = useState(true);
  const [isValidName, setisValidName] = useState(true); // when Name is NULL
  const [isValid, setisValidEmail] = useState(true); // use state for vaild email id
  const [validPassword, setvalidPassword] = useState(true); /// use state for valid password
  const [ShowPassword, setShowPassword] = useState(false);
  let ShowPass = "show";
  let HidePass = "hide";

  const history = useHistory();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [present] = useIonToast();

  const presentToast = (position:any , Apimessage : any) => {
    present({
      message: Apimessage,
      duration: 2000,
      position: position,
      cssClass: "custom-toast",
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    setvalidPassword(passwordRegex.test(formData.password));
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setisValidEmail(emailRegex.test(formData.email));

    if (formData.name.length == 0) {
      setisValidName(false);
    } else {
      setisValidName(true);
    }

    if (
      !emailRegex.test(formData.email) ||
      !passwordRegex.test(formData.password) ||
      formData.name.length == 0
    ) {
      console.log("Invalid data entered");
      return;
    }

    const UserData = {
      fullName: formData.name,
      email: formData.email,
      password: formData.password,
    };
    //  console.log(UserData)
    setIsloading(true);
    axios
      .post("https://expressbe.onrender.com/api/v1/auth/sign-up", UserData)
      .then((response) => {
        setIsloading(false);
        console.log("signp res:", response.status, response.data);
        if (response.data.type === "success") {
          navigate(`/otpPage/signIn/${formData.email}`);
        } else {
          presentToast("top", response.data.message);
        }
      })
      .catch((error) => {
        setIsloading(false);
      });
  };

  const HandleShowPassword = (e: any) => {
    e.preventDefault();
    setShowPassword(!ShowPassword);
  };

  return (
    <IonPage className="SignUpPage">
      <div className="pageContent">
        <div className="pHeading">
          <div>&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;</div>
          <h1>Sign Up</h1>
          <Link to="/signIn">
            <button>Log in</button>
          </Link>
        </div>
        {!existUser && <p className="ExistUser">Account already existing</p>}
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
                className={isValid ? "valid" : "invalid"}
              />
              {!isValid && (
                <p style={{ color: "red" }}>Please enter a valid email</p>
              )}
            </div>
            <div className="formField">
              <input
                type={ShowPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className={validPassword ? "valid" : "invalid"}
              />
              <button onClick={HandleShowPassword}>
                {ShowPassword ? HidePass : ShowPass}
              </button>
              {!validPassword && (
                <p className="InPassword">Please enter a valid password</p>
              )}
            </div>
          </div>
          {/* bottom form  */}
          <div className="bottomForm">
            <div className="checkBox">
              <IonCheckbox
                id="terms"
                className="LargeCheckBox">
              </IonCheckbox>
              <label htmlFor="terms">
                I would like to receive your newsletter and other promotional
                information.
              </label>
            </div>
           
            <button className="submitBtn" type="submit">
              Sign Up
            </button>

            <IonLoading
              isOpen={isLoading}
              message="Loading..."
              className="custom-loading" // Apply the custom class here
            />
          </div>
        </form>
      </div>
    </IonPage>
  );
};

export default SignUp;
