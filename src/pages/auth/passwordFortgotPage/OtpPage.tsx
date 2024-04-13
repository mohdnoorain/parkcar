import { IonPage } from "@ionic/react";
import "./OtpPage.scss";
import { useState } from "react";
const OtpPage: React.FC = () => {
    const [Otp, setOtp] = useState(['', '', '', '']);
    const handleChange = (index: any, e: any) => {
        const value = e.target.value;
        if (!isNaN(value) && value === '') return false;
        const newOtp = [...Otp];
        newOtp[index] = value;
        setOtp(newOtp);
        if (e.target.nextSibling) {
            e.target.nextSibling.focus();
        }
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const enteredOtp = Otp.join('');
        console.log('Entered OTP:', enteredOtp);
        // Clear OTP after submission
        setOtp(['', '', '', '']);
        window.location.href ="http://localhost:8100/createpassword"
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
                    <button onClick={handleOnBack} className="BackBtn"> &#60;</button>
                    <h1>Email Verification</h1>
                </div>
                <div className="pMiddleContent">
                    <h1>Get Your code</h1>
                    <p>Please enter the 4 digit that send to your email address</p>
                </div>
                <div className="DigitOtp">
                    {Otp.map((digit, index) => (
                        <input type="text"
                            key={index}
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(index, e)}
                        />
                    ))}
                </div>
                <div className="test">
                    <p>code expire in :</p>
                    <a href="">Resend</a>
                </div>
            </div>
            <div className="pBottomContent">
                <button onClick={e => alert("enter otp is " + Otp.join(''))} >Verify</button>
            </div>
        </form>
    </IonPage>
}

export default OtpPage;