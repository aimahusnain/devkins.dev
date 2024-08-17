'use client';

import { useState } from 'react';
import DateInput from './DateInput';
import TimeInput from './TimeInput';
import { format, parse, addHours } from 'date-fns';

const timeZones = [
    { label: 'UTC-12:00 International Date Line West', offset: -12 },
    { label: 'UTC-11:00 Coordinated Universal Time-11', offset: -11 },
    { label: 'UTC-10:00 Hawaii', offset: -10 },
    { label: 'UTC-09:00 Alaska', offset: -9 },
    { label: 'UTC-08:00 Pacific Time (US & Canada)', offset: -8 },
    { label: 'UTC-07:00 Mountain Time (US & Canada)', offset: -7 },
    { label: 'UTC-06:00 Central Time (US & Canada)', offset: -6 },
    { label: 'UTC-05:00 Eastern Time (US & Canada)', offset: -5 },
    { label: 'UTC-04:00 Atlantic Time (Canada)', offset: -4 },
    { label: 'UTC-03:00 Brazil, Buenos Aires', offset: -3 },
    { label: 'UTC-02:00 Mid-Atlantic', offset: -2 },
    { label: 'UTC-01:00 Azores', offset: -1 },
    { label: 'UTC+00:00 Greenwich Mean Time, Western Europe Time', offset: 0 },
    { label: 'UTC+01:00 Central European Time, West Africa Time', offset: 1 },
    { label: 'UTC+02:00 Eastern European Time, Central Africa Time', offset: 2 },
    { label: 'UTC+03:00 Moscow Time, East Africa Time', offset: 3 },
    { label: 'UTC+04:00 Gulf Standard Time, Samara Time', offset: 4 },
    { label: 'UTC+05:00 Pakistan, Kazakhstan (west), Uzbekistan', offset: 5 },
    { label: 'UTC+06:00 Bangladesh, Bhutan, Yekaterinburg Time', offset: 6 },
    { label: 'UTC+07:00 Indochina Time, Krasnoyarsk Time', offset: 7 },
    { label: 'UTC+08:00 China Standard Time, Australian Western Standard Time', offset: 8 },
    { label: 'UTC+09:00 Japan Standard Time, Korea Standard Time', offset: 9 },
    { label: 'UTC+10:00 Australian Eastern Standard Time', offset: 10 },
    { label: 'UTC+11:00 Solomon Islands, Vladivostok Time', offset: 11 },
    { label: 'UTC+12:00 New Zealand, Fiji, Magadan Time', offset: 12 },
  ];
  

interface TimeZone {
  label: string;
  offset: number;
}

export default function Home() {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [startTime, setStartTime] = useState<string>('15:03:09');
  const [fromTimeZone, setFromTimeZone] = useState<TimeZone>(timeZones[0]);
  const [toTimeZone, setToTimeZone] = useState<TimeZone>(timeZones[1]);
  const [result, setResult] = useState<string>('');

  const calculateTimeZone = () => {
    const [hours, minutes, seconds] = startTime.split(':').map(Number);
    const startDateTime = new Date(startDate);
    startDateTime.setHours(hours, minutes, seconds);

    const fromOffset = fromTimeZone.offset;
    const toOffset = toTimeZone.offset;
    const resultDateTime = addHours(startDateTime, toOffset - fromOffset);

    setResult(format(resultDateTime, "MMMM dd, yyyy HH:mm:ss (EEEE) 'at' 'UTC' xxx"));
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="max-w-xl w-full bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Time Zone Calculator</h1>
        <div className="mb-6">
          <DateInput label="Date" date={startDate} setDate={setStartDate} />
          <TimeInput label="Time" time={startTime} setTime={setStartTime} />
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
            <select
              className="p-2 border border-gray-300 rounded-lg w-full"
              value={fromTimeZone.label}
              onChange={(e) => setFromTimeZone(timeZones.find(tz => tz.label === e.target.value)!)}
            >
              {timeZones.map(tz => (
                <option key={tz.label} value={tz.label}>{tz.label}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
            <select
              className="p-2 border border-gray-300 rounded-lg w-full"
              value={toTimeZone.label}
              onChange={(e) => setToTimeZone(timeZones.find(tz => tz.label === e.target.value)!)}
            >
              {timeZones.map(tz => (
                <option key={tz.label} value={tz.label}>{tz.label}</option>
              ))}
            </select>
          </div>
        </div>
        <button onClick={calculateTimeZone} className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200">Calculate</button>
        {result && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-lg">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}
