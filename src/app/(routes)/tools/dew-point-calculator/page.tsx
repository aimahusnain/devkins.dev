'use client'

import React, { useState } from 'react';

const DewPointCalculator: React.FC = () => {
  const [airTemperature, setAirTemperature] = useState<number | ''>(20);
  const [relativeHumidity, setRelativeHumidity] = useState<number | ''>(65);
  const [dewPointTemperature, setDewPointTemperature] = useState<number | null>(null);

  const calculateDewPoint = () => {
    if (airTemperature === '' || relativeHumidity === '') {
      alert('Please provide values for Air Temperature and Relative Humidity.');
      return;
    }

    const tempCelsius = (airTemperature - 32) * (5 / 9);
    const es = 6.112 * Math.exp((17.67 * tempCelsius) / (tempCelsius + 243.5));
    const e = (relativeHumidity / 100) * es;
    const dewPoint = (243.5 * Math.log(e / 6.112)) / (17.67 - Math.log(e / 6.112));
    setDewPointTemperature(parseFloat(dewPoint.toFixed(1)));
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Dew Point Calculator</h1>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div>
          <label htmlFor="airTemperature" className="block font-medium text-gray-700 mb-1">Air Temperature (°F)</label>
          <input id="airTemperature" type="number" className="p-3 border border-gray-300 rounded-lg w-full" value={airTemperature} onChange={(e) => setAirTemperature(parseFloat(e.target.value))} />
        </div>
        <div>
          <label htmlFor="relativeHumidity" className="block font-medium text-gray-700 mb-1">Relative Humidity (%)</label>
          <input id="relativeHumidity" type="number" className="p-3 border border-gray-300 rounded-lg w-full" value={relativeHumidity} onChange={(e) => setRelativeHumidity(parseFloat(e.target.value))} />
        </div>
      </div>
      <button onClick={calculateDewPoint} className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200">Calculate Dew Point</button>
      {dewPointTemperature !== null && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-lg">Dew Point Temperature: {dewPointTemperature}°F</p>
        </div>
      )}
    </div>
  );
};

export default DewPointCalculator;
