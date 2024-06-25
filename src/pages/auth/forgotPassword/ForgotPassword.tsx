import { IonLoading, IonPage } from "@ionic/react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import "./ForgotPassword.scss";
import { useState } from "react";
import { useHistory } from "react-router";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const ForgotPassword = () => {

    const navigate = useNavigate();
    const [isLoading, setIsloading] = useState(false);
    const [isValid, setisValid] = useState(true); //  for  vaild email id 
    // use state for taking input of user
    const [formData, setFormData] = useState({
        email: '',
    });






    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setisValid(emailRegex.test(formData.email));
        console.log('Email :', formData.email);

        // if user enter wroung or invalid email then return 
        if (!emailRegex.test(formData.email)) {
            return;
        }
        const UserData = {
            email: formData.email,
        };
        setIsloading(true);
        axios
            .post("https://expressbe.onrender.com/api/v1/auth/forgot-password", UserData)
            .then((response) => {
                setIsloading(false);
                console.log("signp res:", response.status, response.data);

                if (response.data.type === "success") {
                    navigate(`/otpPage/resetPassword/${formData.email}`);
                }
            })
            .catch((error) => {
                setIsloading(false);
                console.log("error")
            });


    }

    const handleOnBack = (e: any) => {
        e.preventDefault();
        navigate(-1);
    }
    return <IonPage className="ForgotPassword">
        <form onSubmit={handleSubmit} className="PageContent" >
            <div className="HalfPage">
                <div className="pHeading">
                    <MdOutlineArrowBackIos onClick={handleOnBack} className="BackBtn" />

                    <h1>Forgot Password</h1>
                </div>
                <div className="pMiddleContent">
                    <p>Enter your email to recover your password </p>
                </div>
                <input type="text"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={isValid ? 'valid' : 'invalid'}
                />
                {!isValid && <p className="InPassword" >Please enter a valid email</p>}
            </div>
            <div className="pBottomContent">
                <button>Recover Password</button>
                 <IonLoading
                    isOpen={isLoading}
                    message="Loading..."
                    className="custom-loading" // Apply the custom class here
                />
            </div>
        </form>
    </IonPage>
}

export default ForgotPassword;