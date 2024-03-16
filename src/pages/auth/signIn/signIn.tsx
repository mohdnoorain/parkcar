import { IonAccordion, IonAccordionGroup, IonBackdrop, IonButton, IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonInput, IonLoading, IonPage, IonSpinner } from "@ionic/react";
import "./signIn.scss"
import React from "react";

interface SignUpForm {
    fullname: string,
    username: string,
    email: string,
    password: string,
}
const SignIn: React.FC = () => {


    const handleDragging = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData(
            "type", e.currentTarget.getAttribute('data-label') + "WX"
        );
        const img = document.createElement('div')
        img.style.width = '20px';
        img.style.height = '20px';
        img.style.backgroundColor = 'red';
        e.dataTransfer.setDragImage(img, 50, 50)
        e.dataTransfer.effectAllowed = "copyMove"
    }

    const handleDrop = (e: React.DragEvent) => {
        const wType = e.dataTransfer.getData('type')
        console.log(wType, 'wtype');
        alert('ghjk')

    }

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault()
        // console.log(e, "ee");
    }

    return (
        <IonPage className="SignUp p-5 gap-2">

            <div className="draggables">
                <div
                    data-label="WA"
                    className="draggable"
                    draggable={true}
                    onDragStart={handleDragging}
                    onDragEnter={(e) => {
                        e.dataTransfer.dropEffect = "copy"
                    }}
                >ttttttttttttttttttttjbbbbhh
                    ffffffffffffffffffffffffffffffffffffffffffff
                </div>
            </div>



            <IonCard>
                <IonCardHeader>
                    head
                </IonCardHeader>
                <IonCardContent>
                    dfhgh
                    <div
                        // onDragOverCapture={(e) => {
                        //     console.log('onDragOverCapture');
                        // }}

                        onDragEnter={(e) => {
                            e.dataTransfer.dropEffect = "copy"
                            console.log('onDragEnter');
                            e.currentTarget.style.border = '3px solid blue'

                        }}
                        onDragLeave={(e) => {
                            console.log('onDragLeave');
                            e.currentTarget.style.border = ''

                        }}
                        onDrop={handleDrop}
                        onDragOver={handleDragOver} className="dropBox">
                        droppabe box


                    </div>
                </IonCardContent>
            </IonCard>
        </IonPage>
    );
};

export default SignIn