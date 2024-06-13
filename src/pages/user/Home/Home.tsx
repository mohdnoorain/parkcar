import { IonButton, IonLoading } from "@ionic/react"

const Home = () => {
    return (
        <>
        <IonButton id="open-loading">Show Loading</IonButton>
        <IonLoading className="custom-loading" trigger="open-loading" message="Loading"  />
        </>
    )
}

export default Home