import axios from "axios";
import { useEffect, useState } from "react";

const Timer = (userEmail:any) => {
    const [timeLeft, setTimeLeft] = useState(10);
    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft]);
    
    const ResetTimer =()=>{
        console.log("userEmail is here " , userEmail.userEmail);
        const UserData = {
            email : userEmail.userEmail,
        }

        axios
            .post("https://expressbe.onrender.com/api/v1/auth/forgot-password", UserData)
            .then((response) => {
                console.log("signp res:", response.status, response.data);
                if (response.data.type === "success") {
                    setTimeLeft(120);
                }
            })
            .catch((error) => {
                
                console.log("error")
            });
        
    }

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };
    return <>
        <div className="timer">
            {timeLeft > 0 ? (
                <p>code expire in: {formatTime(timeLeft)}</p>
            ) : (
                <a  onClick={ResetTimer}>Resend</a>
            )}
        </div>
    </>
}
export default Timer;