import React, { useEffect, useState } from 'react';

const DayNightCycle = () => {
  const [time, setTime] = useState(0);
  const [day, setDay] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        const newTime = (prevTime + 1) % 1440;
        if (newTime === 0) {
          setDay((prevDay) => prevDay + 1);
        }
        return newTime;
      });
    }, 292);

    return () => clearInterval(interval);
  }, []);

  const getFormattedTime = () => {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  };

  const getTimePercentage = () => {
    return (time / 1440) * 100;
  };

  return (
    <div className="fixed top-4 left-4 p-2 bg-gray-900 text-white rounded shadow-lg z-50">
      <p className="text-lg font-bold">{`Day ${day} - ${getFormattedTime()}`}</p>
      <div className="w-full bg-gray-300 rounded h-2 mt-2">
        <div
          className={`h-2 rounded ${time < 720 ? 'bg-yellow-500' : 'bg-blue-500'}`}
          style={{ width: `${getTimePercentage()}%` }}
        ></div>
      </div>
    </div>
  );
};

export default DayNightCycle;
