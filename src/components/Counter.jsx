import { useState } from "react";

const Counter = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [secondes, setSecounds] = useState(0);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if(secondes > 0)
  //   }, 1000);
  // }, [targetDate]);
  return (
    <div className='flex flex-row gap-4 cursor-default'>
      <div className='flex flex-col items-center justify-center gap-3 font-redHat'>
        <span className='p-4 lg:p-6 bg-dark-desaturated-blue font-bold text-soft-red rounded-md text-3xl lg:text-5xl'>
          {days}
        </span>
        <p className='uppercase text-xs text-grayish-blue'>days</p>
      </div>
      <div className='flex flex-col items-center justify-center gap-3 font-redHat'>
        <span className='p-4 lg:p-6 bg-dark-desaturated-blue font-bold text-soft-red rounded-md text-3xl lg:text-5xl'>
          {hours}
        </span>
        <p className='uppercase text-xs text-grayish-blue'>hours</p>
      </div>
      <div className='flex flex-col items-center justify-center gap-3 font-redHat'>
        <span className='p-4 lg:p-6 bg-dark-desaturated-blue font-bold text-soft-red rounded-md text-3xl lg:text-5xl'>
          {minutes}
        </span>
        <p className='uppercase text-xs text-grayish-blue'>minutes</p>
      </div>
      <div className='flex flex-col items-center justify-center gap-3 font-redHat'>
        <span className='p-4 lg:p-6 bg-dark-desaturated-blue font-bold text-soft-red rounded-md text-3xl lg:text-5xl'>
          {secondes}
        </span>
        <p className='uppercase text-xs text-grayish-blue'>seconds</p>
      </div>
    </div>
  );
};

export default Counter;
