import { IonLoading, IonPage, useIonToast } from "@ionic/react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import "./ResetPassword.scss";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const resetPassword = () => {
    const navigate = useNavigate();
    const [isLoading, setIsloading] = useState(false);
    const { userEmail } = useParams();
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: '',
    });

    // use state for vaild password

    const [validPassword, setvalidPassword] = useState(true);
    const [samePassword, setsamePassword] = useState(true);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const [present] = useIonToast();

    const presentToast = (position: any, Apimessage: any) => {
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

        if (formData.password !== formData.confirmPassword || !passwordRegex.test(formData.password)) {
            setsamePassword(false);
            return;
        } else {
            setsamePassword(true);
        }
        console.log('Password', formData.password);
        console.log('Password', formData.confirmPassword);
        console.log("userEmail is " , userEmail);
        const UserData = {
            email: userEmail,
            password: formData.confirmPassword,
        };
        setIsloading(true)
        axios
            .post("https://expressbe.onrender.com/api/v1/auth/reset-password", UserData)
            .then((response) => {
                setIsloading(false);
                console.log("signp res:", response.status, response.data);

                if (response.data.type === "success") {
                    navigate(`/signIn`);
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

    const [ShowPassword, setShowPassword] = useState(false);
    let ShowPass = "show";
    let HidePass = "hide";

    const HandleShowPassword = (e: any) => {
        e.preventDefault();
        setShowPassword(!ShowPassword);
    }
    return <IonPage className="EmailRecoveryPage">
        <form onSubmit={handleSubmit} className="PageContent">
            <div className="HalfPage">
                <div className="pHeading">
                    <MdOutlineArrowBackIos onClick={handleOnBack} className="BackBtn" />
                    <h1>Reset Password</h1>
                </div>
                <div className="pMiddleContent">
                    <p>Your new password must be different</p>
                    <p>from previously used password</p>
                </div>
                <input
                    type={ShowPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className={validPassword ? 'valid' : 'invalid'}
                />
                <button className="ShowPassword" onClick={HandleShowPassword}>
                    {ShowPassword ? HidePass : ShowPass}
                </button>
                {!validPassword && <p className="InPassword" >Please enter a valid password</p>}
                <input type="text"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={samePassword ? 'valid' : 'invalid'}
                />
                {!samePassword && <p className="InPassword">Please match your password</p>}
            </div>
            <div className="pBottomContent">
                <button>Continue</button>
                <IonLoading
                    isOpen={isLoading}
                    message="Loading..."
                    className="custom-loading"
                />
            </div>
        </form>
    </IonPage>
}

export default resetPassword;