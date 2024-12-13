import React, { useState, useMemo } from 'react'
import { dayNames, months } from '@/utils/CalendarUtilities'

const Calendar = () => {
  const [dates, setDates] = useState([])
  const today = new Date().getDay()

  useMemo(() => {
    const today = new Date()
    const days = []
    for (let i = 0; i < 7; i++) {
      const nextDay = new Date()
      nextDay.setDate(today.getDate() + i)
      days.push({
        date: nextDay.getDate(),
        day: nextDay.getDay(),
        month: nextDay.getMonth(),
        year: nextDay.getFullYear(),
      })
    }

    setDates(days)
  }, [])

  return (
    <div className='calendar'>
      {dates.length > 0 && (
        <h1 className='text-lg font-bold text-center py-4'>
          {months[dates[0].month]} {dates[0].year}
        </h1>
      )}

      <div className='grid grid-cols-7 mt-4 overflow-x-auto'>
        {dates.map((day, index) => (
          <div key={index} className='p-4 border border-gray-200 text-center h-[70vh]'>
            <p className='text-xs sm:text-sm text-gray-500'>{dayNames[day.day]}</p>
            <div className={`${today === day.day ? 'bg-black text-white rounded-lg' : ''}`}>
                <p className='text-lg sm:text-2xl font-semibold'>{day.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
