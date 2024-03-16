import { IonBackdrop, IonButton, IonInput, IonLoading, IonPage, IonSpinner } from "@ionic/react";
import "./signUp.scss"
import { useState } from "react";
import ParkInput from "../../../components/ParkInput";

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
            <ParkInput></ParkInput>
        </IonPage>
    );
};

export default SignUp