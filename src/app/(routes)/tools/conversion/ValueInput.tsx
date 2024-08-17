interface ValueInputProps {
    label: string;
    value: number;
    onChange: (value: number) => void;
  }
  
  export default function ValueInput({ label, value, onChange }: ValueInputProps) {
    return (
      <div className="mb-6">
        <label className="block text-lg font-medium text-gray-700 mb-2">{label}</label>
        <input
          type="number"
          className="p-3 border border-gray-300 rounded-lg w-full text-gray-700"
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value))}
        />
      </div>
    );
  }
  