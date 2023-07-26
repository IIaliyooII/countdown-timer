import { useEffect, useRef, useState } from "react";

const Counter = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [secondes, setSecounds] = useState("00");
  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("July 28, 2023 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const secondes = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSecounds(secondes);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div className='flex flex-row gap-4 cursor-default'>
      <div className='flex flex-col items-center justify-center gap-3 font-redHat'>
        <span className='w-16 h-16 lg:w-28 lg:h-28 flex items-center justify-center lg:p-6 bg-dark-desaturated-blue font-bold text-soft-red rounded-md text-3xl lg:text-7xl'>
          {days}
        </span>
        <p className='uppercase text-xs text-grayish-blue'>days</p>
      </div>
      <div className='flex flex-col items-center justify-center gap-3 font-redHat'>
        <span className='w-16 h-16 lg:w-28 lg:h-28 flex items-center justify-center lg:p-6 bg-dark-desaturated-blue font-bold text-soft-red rounded-md text-3xl lg:text-7xl'>
          {hours}
        </span>
        <p className='uppercase text-xs text-grayish-blue'>hours</p>
      </div>
      <div className='flex flex-col items-center justify-center gap-3 font-redHat'>
        <span className='w-16 h-16 lg:w-28 lg:h-28 flex items-center justify-center lg:p-6 bg-dark-desaturated-blue font-bold text-soft-red rounded-md text-3xl lg:text-7xl'>
          {minutes}
        </span>
        <p className='uppercase text-xs text-grayish-blue'>minutes</p>
      </div>
      <div className='flex flex-col items-center justify-center gap-3 font-redHat'>
        <span className='w-16 h-16 lg:w-28 lg:h-28 flex items-center justify-center lg:p-6 bg-dark-desaturated-blue font-bold text-soft-red rounded-md text-3xl lg:text-7xl'>
          {secondes}
        </span>
        <p className='uppercase text-xs text-grayish-blue'>seconds</p>
      </div>
    </div>
  );
};

export default Counter;
