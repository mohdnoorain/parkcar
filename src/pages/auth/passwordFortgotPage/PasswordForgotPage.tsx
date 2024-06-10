import { IonPage } from "@ionic/react";
import "./EmailRecoveryPage.scss";
import { useState } from "react";

const EmailRecoveryPage = () => {
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
        window.location.href = "http://localhost:8100/OtpPage";
    }

    const handleOnBack = (e: any) => {
        e.preventDefault();
        console.log("back is clicked");
        window.history.back();
    }
    return <IonPage className="EmailRecoveryPage">
        <form onSubmit={handleSubmit} className="PageContent" >
            <div className="HalfPage">
                <div className="pHeading">
                    <button onClick={handleOnBack} className="BackBtn"> &#60;</button>
                    <h1>Forgot Password</h1>
                </div>
                <div className="pMiddleContent">
                    <h1>Mail Address here</h1>
                    <p>Enter your email to recover your password </p>
                </div>
                <input type="text"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={isValid ? 'valid' : 'invalid'}
                />
                {!isValid && <p className="InPassword">Please enter a valid email</p>}
            </div>
            <div className="pBottomContent">
                <button>Recover Password</button>
            </div>
        </form>
    </IonPage>
}

export default EmailRecoveryPage;