import { IonButton, IonLoading } from "@ionic/react"
import { AUTH_TOKEN_KEY } from "../../../constants/contants";
import { useNavigate } from "react-router-dom";



const Home = () => {

    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.removeItem(AUTH_TOKEN_KEY);
        navigate("/auth");
    }
    return (
        <>
            <IonButton onClick={handleSignOut} >Sign Out</IonButton>
        </>
    )
}

export default Home