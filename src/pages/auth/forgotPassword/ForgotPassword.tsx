import { IonPage } from "@ionic/react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import "./ForgotPassword.scss";
import { useState } from "react";
import { useHistory } from "react-router";
const ForgotPassword = () => {

    const history = useHistory()
    // use state for taking input of user
    const [formData, setFormData] = useState({
        email: '',
    });

    // use state for vaild email id 

    const [isValid, setisValid] = useState(true);

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
        if (!emailRegex.test(formData.email)){
            return;
        }
        // window.location.href = "http://localhost:8100/OtpPage";
        history.push("/resetPassword")
    }

    const handleOnBack = (e: any) => {
        e.preventDefault();
        console.log("back is clicked");
        history.goBack();
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
            </div>
        </form>
    </IonPage>
}

export default ForgotPassword;