import { useEffect, useState } from "react";

const Timer = () => {
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
        setTimeLeft(120);
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