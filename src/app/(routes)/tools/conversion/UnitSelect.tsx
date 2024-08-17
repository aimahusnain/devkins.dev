import { Dispatch, SetStateAction } from 'react';

interface UnitSelectProps {
  label: string;
  options: string[];
  value: string; // Assuming value is of type string
  onChange: Dispatch<SetStateAction<string>>; // Update the type of onChange to match the state updater function
}

export default function UnitSelect({ label, options, value, onChange }: UnitSelectProps) {
  return (
    <div className="mb-6">
      <label className="block text-lg font-medium text-gray-700 mb-2">{label}</label>
      <select
        className="p-3 border border-gray-300 rounded-lg w-full text-gray-700"
        value={value}
        onChange={(e) => onChange(e.target.value)} // Convert event target value to string
      >
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
