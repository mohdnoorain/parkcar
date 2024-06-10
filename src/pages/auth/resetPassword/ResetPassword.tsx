import { IonPage } from "@ionic/react";
import "./ResetPassword.scss";
import { useState } from "react";
const ResetPassword = () => {
    // use state for taking input of user
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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        setvalidPassword(passwordRegex.test(formData.password));
        console.log('Password', formData.password);
        console.log('Password', formData.confirmPassword);
        if (formData.password !== formData.confirmPassword) {
            setsamePassword(false);
        } else {
            setsamePassword(true);
        }
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
                    <h1>Reset Password</h1>
                </div>
                <div className="pMiddleContent">
                    <p>Your new password must be different</p>
                    <p>from previously used password</p>
                </div>
                <input type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className={validPassword ? 'valid' : 'invalid'}
                />
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
            </div>
        </form>
    </IonPage>
}

export default ResetPassword;