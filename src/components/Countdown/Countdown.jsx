import { useState, useEffect, useRef } from 'react';
import css from './Countdown.module.scss';
function Countdown() {
  const { item, container, item_lable_time, item_time } = css;
  const [time, setTime] = useState({ day: 0, hour: 0, minute: 0, second: 0 });
  const intervalRef = useRef();

  useEffect(() => {
    const dateFuture = new Date('2025-10-29T00:00:00');

    intervalRef.current = setInterval(() => {
      const now = new Date();
      const diff = dateFuture - now;

      if (diff <= 0) {
        clearInterval(intervalRef.current);
        setTime({ day: 0, hour: 0, minute: 0, second: 0 });
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTime({ day: days, hour: hours, minute: minutes, second: seconds });
      }
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className={`flex justify-center gap-x-3 ${container}`}>
      <div className={`${item} flex items-center justify-center gap-x-3`}>
        <span className={item_time}>{time.day}</span>
        <span className={item_lable_time}>Days</span>
      </div>
      <div className={`${item} flex items-center justify-center gap-x-3`}>
        <span className={item_time}>{time.hour}</span>
        <span className={item_lable_time}>Hours</span>
      </div>
      <div className={`${item} flex items-center justify-center gap-x-3`}>
        <span className={item_time}>{time.minute}</span>
        <span className={item_lable_time}>Mins</span>
      </div>
      <div className={`${item} flex items-center justify-center gap-x-3`}>
        <span className={item_time}>{time.second}</span>
        <span className={item_lable_time}>Secs</span>
      </div>
    </div>
  );
}

export default Countdown;
