import {
  IonBackdrop,
  IonButton,
  IonInput,
  IonLoading,
  IonPage,
  IonSpinner,
} from "@ionic/react";
import "./SignUp.scss";
import { useState } from "react";
import ParkInput from "../../../components/ParkInput";

interface SignUpForm {
  fullname: string;
  username: string;
  email: string;
  password: string;
}
const SignUp: React.FC = () => {
  const [form, setForm] = useState<SignUpForm>({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });
  const [loaderFor, setLoaderFor] = useState<"submit">();

  const handleInputChange = (e: React.FormEvent<HTMLIonInputElement>) => {
    setForm({
      ...form,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const signUp = () => {
    setLoaderFor("submit");
  };

  return (
    <IonPage className="SignUp p-5 gap-2">
      <div className="CompletePage">
      <div className="hero">
        <h1>Sign Up</h1>
        <button>Log in</button>
      </div>
      <div className="name">
        <input type="text" placeholder="Name" />
      </div>
      <div className="Email">
         <input type="text" placeholder="Email" />
      </div>
      <div className="Password">
         <input type="text" placeholder="Password" />
         <button>Show</button>
      </div>
      <div className="msg">
        <p>I would like to receive your newsletter and other promotional information.</p>
      </div>
      <div className="SignUpButton">
        <button className="RealSignUpButton">Sign Up</button>
        <button className="ForgotPassword">Forgot your password?</button>
      </div>
      </div>
    </IonPage>
  );
};

export default SignUp;
