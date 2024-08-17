"use client";

//  import { useState } from "react";
//  import {
//    format,
//    getDayOfYear,
//    getDay,
//    getDaysInMonth,
//    startOfMonth,
//  } from "date-fns";

//  export default function DayOfWeekCalculator() {
//    const [selectedDate, setSelectedDate] = useState(new Date());

//    const dayOfWeek = format(selectedDate, "iiii");
//    const dayOfYear = getDayOfYear(selectedDate);
//    const dayOfWeekInMonth = Math.ceil((getDay(selectedDate) + 1) / 7);
//    const daysInMonth = getDaysInMonth(selectedDate);
//    const daysLeftInYear =
//      getDayOfYear(new Date(selectedDate.getFullYear(), 11, 31)) - dayOfYear;
//    const daysLeftInMonth = daysInMonth - selectedDate.getDate();
//    const daysInWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

//    const calendar = () => {
//      const firstDayOfMonth = startOfMonth(selectedDate);
//      const firstDayOfWeek = getDay(firstDayOfMonth);
//      const offset = Array.from({ length: firstDayOfWeek }, (_, i) => (
//        <td key={i}></td>
//      ));
//      const days = Array.from({ length: daysInMonth }, (_, i) => (
//        <td
//          key={i + firstDayOfWeek}
//          className={
//            selectedDate.getDate() === i + 1
//              ? "bg-blue-500 text-white font-semibold"
//              : "font-medium"
//          }
//        >
//          {i + 1}
//        </td>
//      ));
//      const weeks = [];
//      for (let i = 0; i < daysInMonth / 7; i++) {
//        weeks.push(
//          <tr key={i}>
//            {offset}
//            {days.slice(i * 7, (i + 1) * 7)}
//          </tr>
//        );
//      }
//      return weeks;
//    };

//    return (
//      <div className="container mx-auto p-8">
//        <h1 className="text-4xl font-bold mb-8 text-center">
//          Day of the Week Calculator
//        </h1>
//        <div className="flex items-center justify-center mb-8">
//          <label className="block text-lg font-medium text-gray-700 mr-4">
//            Date
//          </label>
//          <input
//            type="date"
//            className="p-3 border border-gray-300 rounded-lg w-full text-gray-700"
//            value={format(selectedDate, "yyyy-MM-dd")}
//            onChange={(e) => setSelectedDate(new Date(e.target.value))}
//          />
//        </div>
//        <div className="mb-8">
//          <h2 className="text-2xl font-bold mb-4">Result</h2>
//          <p className="text-lg">
//            {format(selectedDate, "MMMM d, yyyy")} is a{" "}
//            <span className="text-blue-500">{dayOfWeek}</span>
//          </p>
//          <p>
//            It is the <span className="text-blue-500">#{dayOfYear}</span> day out
//            of a total of <span className="text-blue-500">366 days</span> in{" "}
//            {selectedDate.getFullYear()}.
//          </p>
//          <p>
//            There are <span className="text-blue-500">{daysLeftInYear} days</span>{" "}
//            left in {selectedDate.getFullYear()}.
//          </p>
//          <p>
//            It is the{" "}
//            <span className="text-blue-500">
//              #{dayOfWeekInMonth} {dayOfWeek}
//            </span>{" "}
//            out of a total of{" "}
//            <span className="text-blue-500">
//              {Math.ceil(daysInMonth / 7)} {dayOfWeek}s
//            </span>{" "}
//            in {format(selectedDate, "yyyy")}.
//          </p>
//          <p>
//            There are{" "}
//            <span className="text-blue-500">
//              {Math.ceil(daysLeftInMonth / 7)} {dayOfWeek}s
//            </span>{" "}
//            left in {format(selectedDate, "MMMM yyyy")}.
//          </p>
//        </div>
//        <div className="grid grid-cols-7 gap-4">
//          {daysInWeek.map((day, index) => (
//            <div key={`header-${index}`} className="calendar-header">
//              {day}
//            </div>
//          ))}
//          {calendar()}
//        </div>
//      </div>
//    );
//  }

import { useState } from "react";
import {
  format,
  getDayOfYear,
  getDay,
  getDaysInMonth,
  startOfMonth,
} from "date-fns";

export default function DayOfWeekCalculator() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const dayOfWeek = format(selectedDate, "iiii");
  const dayOfYear = getDayOfYear(selectedDate);
  const dayOfWeekInMonth = Math.ceil((getDay(selectedDate) + 1) / 7);
  const daysInMonth = getDaysInMonth(selectedDate);
  const daysLeftInYear =
    getDayOfYear(new Date(selectedDate.getFullYear(), 11, 31)) - dayOfYear;
  const daysLeftInMonth = daysInMonth - selectedDate.getDate();
  const daysInWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const calendar = () => {
    const today = new Date();
    const firstDayOfMonth = startOfMonth(selectedDate);
    const firstDayOfWeek = getDay(firstDayOfMonth);
    const daysInMonth = getDaysInMonth(selectedDate);
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const blanks = Array.from({ length: firstDayOfWeek }, (_, i) => null);
    const totalDays = [...blanks, ...days];

    return totalDays.map((day: any, index: any) => {
      const currentDate = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        day
      );
      const isToday = currentDate.toDateString() === today.toDateString();
      return (
        <div
          key={`day-${index}`}
          className={`calendar-day ${isToday ? "today" : ""}`}
        >
          {day}
        </div>
      );
    });
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Day of the Week Calculator
      </h1>
      <div className="flex items-center justify-center mb-8">
        <label className="block text-lg font-medium text-gray-700 mr-4">
          Date
        </label>
        <input
          type="date"
          className="p-3 border border-gray-300 rounded-lg w-full text-gray-700"
          value={format(selectedDate, "yyyy-MM-dd")}
          onChange={(e) => setSelectedDate(new Date(e.target.value))}
        />
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Result</h2>
        <p className="text-lg">
          {format(selectedDate, "MMMM d, yyyy")} is a{" "}
          <span className="text-blue-500">{dayOfWeek}</span>
        </p>
        <p>
          It is the <span className="text-blue-500">#{dayOfYear}</span> day out
          of a total of <span className="text-blue-500">366 days</span> in{" "}
          {selectedDate.getFullYear()}.
        </p>
        <p>
          There are <span className="text-blue-500">{daysLeftInYear} days</span>{" "}
          left in {selectedDate.getFullYear()}.
        </p>
        <p>
          There are{" "}
          <span className="text-blue-500">
            {Math.ceil(daysLeftInMonth / 7)} {dayOfWeek}s
          </span>{" "}
          left in {format(selectedDate, "MMMM yyyy")}.
        </p>
      </div>
      <div className="grid grid-cols-7 gap-4">
        {daysInWeek.map((day, index) => (
          <div key={`header-${index}`} className="calendar-header">
            {day}
          </div>
        ))}
        {calendar()}
      </div>
    </div>
  );
}
