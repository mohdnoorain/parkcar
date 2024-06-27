import { IonButton, IonLoading } from "@ionic/react"



const Home = () => {
    const handleSignOut =()=>{
        localStorage.removeItem('authToken');
    }
    return (
        <>
        <IonButton onClick={handleSignOut} >Sign Out</IonButton>
        
        </>
    )
}

export default Home