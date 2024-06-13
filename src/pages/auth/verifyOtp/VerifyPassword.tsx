import { IonPage } from "@ionic/react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import "./Verifypassword.scss";
import { useState } from "react";
import Timer from "./Timer";
const verifyPassword = () => {
    const [Otp, setOtp] = useState(['', '', '', '']);
    const handleChange = (index: any, e: any) => {
        const value = e.target.value;
        // if ( value === '') return false;
        const newOtp = [...Otp];
        newOtp[index] = value;
        setOtp(newOtp);
        if (e.target.nextSibling) {
            if (value === '') return;
            e.target.nextSibling.focus();
        }
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const enteredOtp = Otp.join('');
        console.log('Entered OTP:', enteredOtp);
        // Clear OTP after submission
        setOtp(['', '', '', '']);
        window.location.href = "http://localhost:8100/resetPassword"
    }

    const handleOnBack = (e: any) => {
        e.preventDefault();
        console.log("back is clicked");
        window.history.back();
    }
    return <IonPage className="EmailRecoveryPage">
        <form onSubmit={handleSubmit} className="PageContent">
            <div className="HalfPage">
                <div className="pHeading">
                    <MdOutlineArrowBackIos onClick={handleOnBack} className="BackBtn" />
                    <h1>Email Verification</h1>
                </div>
                <div className="pMiddleContent">
                    <p>Please enter the 4 digit that <br></br> send to your email address</p>
                </div>
                <div className="DigitOtp">
                    {Otp.map((digit, index) => (
                        <input type="number"
                            key={index}
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(index, e)}
                        />
                    ))}
                </div>
                <div className="test">

                    <Timer></Timer>

                </div>
            </div>
            <div className="pBottomContent">
                <button onClick={e => alert("enter otp is " + Otp.join(''))} >Verify</button>
            </div>
        </form>
    </IonPage>
}

export default verifyPassword;