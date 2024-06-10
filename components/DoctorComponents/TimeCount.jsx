'use client';
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";



const TimeCount = () => {
    const [TimeLimit, setTimeLimit] = useState(false);
    const [minutes, setMinutes] = useState(5);
    const [seconds, setSeconds] = useState(0);
    const router = useRouter();
  
    useEffect(() => {
      const target = new Date();
      target.setMinutes(target.getMinutes() + 5);

      const interval = setInterval(() => {
        const now = new Date();
        const difference = target.getTime() - now.getTime();
  
        
  
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        setMinutes(m);
  
        const s = Math.floor((difference % (1000 * 60)) / 1000);
        setSeconds(s);
  
        setMinutes(m);
        setSeconds(s);
  
        if (difference <= 0) {
          clearInterval(interval);
          setTimeLimit(true);
          router.push("/DoctorCall");
        }
      }, 1000);

      return () => clearInterval(interval);
    }, [router]);
  
    return (
        <div className="containers" style={{ textAlign: "center", height:225 , }}>
          {!TimeLimit && (
            <>
            <h1 style={{ marginBottom: "10px", marginTop: "10px",fontSize: "20px", fontWeight: "bold", color: "#008080" }}>Countdown Timer</h1>
            <div className="timer-inner" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div className="timer-segment" style={{ marginBottom: "3px" }}>
                <span className="time" style={{ fontSize: "24px" }}>{minutes}</span>
                <span className="label" style={{ fontSize: "18px" }}> Minutes</span>
              </div>
              <span className="divider" style={{ fontSize: "24px" }}>:</span>
              <div className="timer-segment" style={{ marginTop: "5px" }}>
                <span className="time" style={{ fontSize: "24px" }}>{seconds}</span>
                <span className="label" style={{ fontSize: "18px" }}> Seconds</span>
              </div>
            </div>
          </>
          )}
        </div>
      );
  };
  
  export default TimeCount;

