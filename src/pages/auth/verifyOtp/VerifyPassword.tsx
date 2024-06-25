import { IonLoading, IonPage, useIonToast } from "@ionic/react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import "./Verifypassword.scss";
import { useState } from "react";
import Timer from "./Timer";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const verifyPassword = () => {

    const navigate = useNavigate();
    const { userId, userEmail } = useParams();
    const [present] = useIonToast();
    const [isLoading, setIsloading] = useState(false);
    const [Otp, setOtp] = useState(['', '', '', '']);
    
    const handleChange = (index: any, e: any) => {
        const value = e.target.value;
        const newOtp = [...Otp];
        newOtp[index] = value;
        setOtp(newOtp);
        if (e.target.nextSibling) {
            if (value === '') return;
            e.target.nextSibling.focus();
        }
    }


    const presentToast = (position: any, Apimessage: any) => {
        present({
            message: Apimessage,
            duration: 2000,
            position: position,
            cssClass: "custom-toast",
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const enteredOtp = Otp.join('');
        console.log('Entered OTP:', enteredOtp);
        // Clear OTP after submission
        console.log("userId is here ", userId);
        const UserData = {
            email: userEmail,
            otp: enteredOtp,
        };
        setIsloading(true)
        axios
            .post("https://expressbe.onrender.com/api/v1/auth/verify-otp", UserData)
            .then((response) => {
                setIsloading(false);
                console.log("signp res:", response.status, response.data);

                if (response.data.type === "success") {
                    setOtp(['', '', '', '']);
                    if (userId === "signIn"){
                        navigate(`/signIn`);
                    }else
                        if (userId === "resetPassword"){
                            navigate(`/${userId}/${userEmail}`);
                        }
                    
                } else {
                    presentToast("top", response.data.message);
                    console.log(response.data.message);
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
                    <Timer userEmail={userEmail}></Timer>
                </div>
            </div>
            <div className="pBottomContent">
                <button  >Verify</button>
                <IonLoading
                    isOpen={isLoading}
                    message="Loading..."
                    className="custom-loading"
                />
            </div>
        </form>
    </IonPage>
}

export default verifyPassword;