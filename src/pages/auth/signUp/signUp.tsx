import { IonBackdrop, IonButton, IonInput, IonLoading, IonPage, IonSpinner } from "@ionic/react";
import "./signUp.scss"
import { useState } from "react";

interface SignUpForm {
    fullname: string,
    username: string,
    email: string,
    password: string,
}
const SignUp: React.FC = () => {

    const [form, setForm] = useState<SignUpForm>({
        fullname: '',
        username: '',
        email: '',
        password: '',
    });
    const [loaderFor, setLoaderFor] = useState<"submit">()

    const handleInputChange = (e: React.FormEvent<HTMLIonInputElement>) => {
        setForm({
            ...form,
            [e.currentTarget.name]: e.currentTarget.value
        });
    }

    const signUp = () => {
        setLoaderFor("submit");

    }

    return (
        <IonPage className="SignUp p-5 gap-2">
            <h2 className="">Sign Up to <b>PARKCAR</b></h2>
            <IonInput
                name="fullname"
                onChange={handleInputChange}
                value={form.fullname}
                label="Full Name" labelPlacement="floating"
                fill="outline" placeholder="Ex. Raj Roy"
            />
            <IonInput
                value={form.username}
                label="Username" labelPlacement="floating"
                fill="outline" placeholder="Ex. raj12roy"
            />
            <IonInput
                value={form.email}
                label="Emai" labelPlacement="floating"
                fill="outline" placeholder="Ex. rajroy@gmail.com"
            />
            <IonInput
                value={form.password}
                label="Password" hidden labelPlacement="floating"
                fill="outline" placeholder="*******"
            />
            <IonButton
                onClick={signUp}
                id="open-loading" className="btn"
                title="Sign Up" expand="full" >

                {
                    loaderFor == "submit" ?
                        <IonSpinner name="dots"></IonSpinner>
                        : "Sign Up"
                }
            </IonButton>


        </IonPage>
    );
};

export default SignUp