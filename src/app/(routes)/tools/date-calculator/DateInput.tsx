import { useState } from 'react';
import { format, parse } from 'date-fns';

interface DateInputProps {
  label: string;
  date: Date;
  setDate: (date: Date) => void;
}

export default function DateInput({ label, date, setDate }: DateInputProps) {
  const [inputValue, setInputValue] = useState<string>(format(date, 'MM/dd/yyyy'));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = parse(e.target.value, 'MM/dd/yyyy', new Date());
    setInputValue(e.target.value);
    setDate(newDate);
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded-lg w-full"
        placeholder="MM/DD/YYYY"
      />
    </div>
  );
}
