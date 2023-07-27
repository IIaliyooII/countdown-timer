/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const Counter = ({ onDate, onIsValid }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [secondes, setSecounds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const countDownDate = new Date(onDate).getTime();

      if (countDownDate < now) {
        onIsValid(false);
        return;
      }

      const gap = countDownDate - now;

      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      const countDays = Math.floor(gap / day);
      const countHours = Math.floor((gap % day) / hour);
      const countMinutes = Math.floor((gap % hour) / minute);
      const countSeconds = Math.floor((gap % minute) / second);

      if (gap < 100) {
        clearInterval(interval);
      } else {
        onIsValid(true);
        setDays(countDays);
        setHours(countHours);
        setMinutes(countMinutes);
        setSecounds(countSeconds);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [onDate, onIsValid]);

  return (
    <div className='flex flex-row gap-4 cursor-default'>
      <div className='flex flex-col items-center justify-center gap-3 font-redHat'>
        <span className='w-16 h-16 lg:w-28 lg:h-28 flex items-center justify-center lg:p-6 bg-dark-desaturated-blue font-bold text-soft-red rounded-md text-3xl lg:text-5xl'>
          {days || "00"}
        </span>
        <p className='uppercase text-xs text-grayish-blue'>days</p>
      </div>
      <div className='flex flex-col items-center justify-center gap-3 font-redHat'>
        <span className='w-16 h-16 lg:w-28 lg:h-28 flex items-center justify-center lg:p-6 bg-dark-desaturated-blue font-bold text-soft-red rounded-md text-3xl lg:text-5xl'>
          {hours || "00"}
        </span>
        <p className='uppercase text-xs text-grayish-blue'>hours</p>
      </div>
      <div className='flex flex-col items-center justify-center gap-3 font-redHat'>
        <span className='w-16 h-16 lg:w-28 lg:h-28 flex items-center justify-center lg:p-6 bg-dark-desaturated-blue font-bold text-soft-red rounded-md text-3xl lg:text-5xl'>
          {minutes || "00"}
        </span>
        <p className='uppercase text-xs text-grayish-blue'>minutes</p>
      </div>
      <div className='flex flex-col items-center justify-center gap-3 font-redHat'>
        <span className='w-16 h-16 lg:w-28 lg:h-28 flex items-center justify-center lg:p-6 bg-dark-desaturated-blue font-bold text-soft-red rounded-md text-3xl lg:text-5xl'>
          {secondes || "00"}
        </span>
        <p className='uppercase text-xs text-grayish-blue'>seconds</p>
      </div>
    </div>
  );
};

export default Counter;
