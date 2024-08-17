'use client';

import { useState, useEffect } from 'react';
import UnitSelect from './UnitSelect';
import ValueInput from './ValueInput';
import convert, { Unit } from 'convert-units';

const units = {
  length: ['m', 'km', 'cm', 'mm', 'µm', 'nm', 'mi', 'yd', 'ft', 'in', 'ly'],
  temperature: ['C', 'K', 'F', 'R'],
  area: ['m²', 'km²', 'cm²', 'mm²', 'ft²', 'mi²'],
  volume: ['l', 'ml', 'm³', 'ft³', 'in³'],
  weight: ['kg', 'g', 'mg', 'lb', 'oz'],
  speed: ['m/s', 'km/h', 'mph', 'kn'],
  pressure: ['Pa', 'kPa', 'MPa', 'bar', 'psi'],
  energy: ['J', 'kJ', 'cal', 'kcal', 'Wh', 'kWh'],
  power: ['W', 'kW', 'hp'],
  time: ['s', 'min', 'h', 'day'],
};

type UnitCategory = keyof typeof units;

export default function Home() {
  const [category, setCategory] = useState<UnitCategory>('length');
  const [fromUnit, setFromUnit] = useState<Unit>(units.length[0] as Unit);
  const [toUnit, setToUnit] = useState<Unit>(units.length[1] as Unit);
  const [value, setValue] = useState<number>(1);
  const [result, setResult] = useState<number | null>(null);

  useEffect(() => {
    const convertedValue = convert(value).from(fromUnit).to(toUnit);
    setResult(convertedValue);
  }, [value, fromUnit, toUnit]);

  return (
    <div className="p-8 bg-gradient-to-r from-blue-50 to-blue-200 min-h-screen flex flex-col items-center">
      <div className="max-w-xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">Conversion Calculator</h1>
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">Category</label>
          <select
            className="p-3 border border-gray-300 rounded-lg w-full text-gray-700"
            value={category}
            onChange={(e) => {
              const selectedCategory = e.target.value as UnitCategory;
              setCategory(selectedCategory);
              setFromUnit(units[selectedCategory][0] as Unit);
              setToUnit(units[selectedCategory][1] as Unit);
            }}
          >
            {Object.keys(units).map(cat => (
              <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
            ))}
          </select>
        </div>
        <ValueInput label="Value" value={value} onChange={setValue} />
        <UnitSelect label="From" options={units[category]} value={fromUnit} onChange={setFromUnit} />
        <UnitSelect label="To" options={units[category]} value={toUnit} onChange={setToUnit} />
        {result !== null && (
          <div className="mt-8 p-6 bg-blue-50 rounded-lg shadow-inner">
            <p className="text-xl font-semibold text-blue-600">{`${value} ${fromUnit} = ${result} ${toUnit}`}</p>
          </div>
        )}
      </div>
    </div>
  );
}
