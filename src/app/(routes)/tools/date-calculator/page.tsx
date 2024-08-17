'use client'

'use client';

import { useState } from 'react';
import DateInput from './DateInput';
import { differenceInDays, differenceInYears, differenceInMonths, format } from 'date-fns';

interface DateDiff {
  years?: number;
  months?: number;
  weeks?: number;
  days?: number;
}

export default function Home() {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [dateDiff, setDateDiff] = useState<DateDiff>({});

  const calculateDifference = () => {
    const years = differenceInYears(endDate, startDate);
    const months = differenceInMonths(endDate, startDate) % 12;
    const days = differenceInDays(endDate, startDate);
    const weeks = Math.floor(days / 7);
    const remainingDays = days % 7;

    setDateDiff({ years, months, weeks, days: remainingDays });
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="max-w-xl w-full bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Date Calculator</h1>
        <h2 className="text-xl font-semibold mb-4">Days Between Two Dates</h2>
        <div className="mb-6">
          <DateInput label="Start Date" date={startDate} setDate={setStartDate} />
          <DateInput label="End Date" date={endDate} setDate={setEndDate} />
        </div>
        <button onClick={calculateDifference} className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200">Calculate</button>
        {dateDiff.years !== undefined && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-lg"><strong>{dateDiff.years}</strong> years</p>
            <p className="text-lg"><strong>{dateDiff.months}</strong> months</p>
            <p className="text-lg"><strong>{dateDiff.weeks}</strong> weeks</p>
            <p className="text-lg"><strong>{dateDiff.days}</strong> days</p>
          </div>
        )}
      </div>
    </div>
  );
}
