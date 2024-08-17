'use client'

import React, { useState } from 'react';

const SpeedCalculator: React.FC = () => {
  const [distance, setDistance] = useState<number>(100);
  const [timeHours, setTimeHours] = useState<number>(0);
  const [timeMinutes, setTimeMinutes] = useState<number>(20);
  const [timeSeconds, setTimeSeconds] = useState<number>(0);
  const [speed, setSpeed] = useState<number | null>(null);

  const calculateSpeed = () => {
    const totalSeconds = timeHours * 3600 + timeMinutes * 60 + timeSeconds;
    const calculatedSpeed = distance / totalSeconds;
    setSpeed(calculatedSpeed);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Speed Calculator</h1>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div>
          <label htmlFor="distance" className="block font-medium text-gray-700 mb-1">Distance (meters)</label>
          <input id="distance" type="number" className="p-3 border border-gray-300 rounded-lg w-full" value={distance} onChange={(e) => setDistance(parseFloat(e.target.value))} />
        </div>
        <div>
          <label className="block font-medium text-gray-700 mb-1">Time</label>
          <div className="flex">
            <input type="number" className="p-3 border border-gray-300 rounded-l-lg w-1/3" value={timeHours} onChange={(e) => setTimeHours(parseFloat(e.target.value))} />
            <input type="number" className="p-3 border border-gray-300 w-1/3" value={timeMinutes} onChange={(e) => setTimeMinutes(parseFloat(e.target.value))} />
            <input type="number" className="p-3 border border-gray-300 rounded-r-lg w-1/3" value={timeSeconds} onChange={(e) => setTimeSeconds(parseFloat(e.target.value))} />
          </div>
        </div>
      </div>
      <button onClick={calculateSpeed} className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200">Calculate Speed</button>
      {speed !== null && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-lg">Speed: {speed.toFixed(2)} meters/second</p>
        </div>
      )}
    </div>
  );
};

export default SpeedCalculator;
