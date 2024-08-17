import { useState } from 'react';

interface TimeInputProps {
  label: string;
  time: string;
  setTime: (time: string) => void;
}

export default function TimeInput({ label, time, setTime }: TimeInputProps) {
  const [inputValue, setInputValue] = useState<string>(time);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setTime(e.target.value);
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded-lg w-full"
        placeholder="HH:MM:SS"
      />
    </div>
  );
}
