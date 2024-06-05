import React, { useEffect, useState } from 'react';

const DayNightCycle = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => (prevTime + 1) % 1440);
    }, 292); // 7 minutes for 24 hours: 420 seconds / 1440 minutes = 0.292s per minute

    return () => clearInterval(interval);
  }, []);

  const getFormattedTime = () => {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  };

  return (
    <div className="day-night-cycle">
      <p>{getFormattedTime()}</p>
    </div>
  );
};

export default DayNightCycle;
