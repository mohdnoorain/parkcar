import { IonPage } from "@ionic/react";
import "./SignIn.scss";
import React from "react";
import { useState } from "react";
const SignIn: React.FC = () => {
  // use state for taking input of user
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("FD", formData);
  };
  const [ShowPassword, setShowPassword] = useState(false);
  let ShowPass = "show";
  let HidePass = "hide";

  const HandleShowPassword = () => {
    setShowPassword(!ShowPassword);
  };
  return (
    <IonPage className="SignInPage">
      <div className="pageContent">
        <div className="pHeading">
          <h1>Log In</h1>
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
            <button className="submitBtn" type="submit">
              Log In
            </button>

            <a href="">Forgot your password?</a>
          </div>
        </form>
      </div>
    </IonPage>
  );
};

export default SignIn;
