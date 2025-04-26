import { useEffect, useState } from "react";
import { padZero } from "../utils/functions";
export default function Counter() {
  const [time, setTime] = useState("03-04-05-08");
  useEffect(() => {
    const fecha = new Date();
    fecha.setDate(fecha.getDate() + 3);
    const interval = setInterval(() => {
      const now = new Date();
      const difference = fecha - now;
      if (difference <= 0) {
        clearInterval(interval);
        setTime("00-00-00-00");
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTime(`${padZero(days)}-${padZero(hours)}-${padZero(minutes)}-${padZero(seconds)}`);
    }
    }, 1000);
  }, []);

  return (
    <div className="counterContainer">
      <div className="timeContainer">
        <p className="time">{time.slice(0, 2)}</p>
        <p className="timeUnit">días</p>
      </div>
      <div className="timeContainer">
        <p className="time">{time.slice(3, 5)}</p>
        <p className="timeUnit">horas</p>
      </div>
      <div className="timeContainer">
        <p className="time">{time.slice(6, 8)}</p>
        <p className="timeUnit">minutos</p>
      </div>
      <div className="timeContainer">
        <p className="time">{time.slice(9)}</p>
        <p className="timeUnit">segundos</p>
      </div>
    </div>
  );
}
