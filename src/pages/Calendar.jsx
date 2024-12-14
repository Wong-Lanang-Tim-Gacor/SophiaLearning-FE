import React, { useState, useMemo } from 'react'
import { dayNames, months } from '@/utils/CalendarUtilities'
import { tasks } from '@/utils/DummyData';
import Todo from '@/components/ui/Todo';

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

  const getTasksForDate = (fullDate) => {
    return tasks.filter((task) => task.due_date.includes(fullDate))
  }

  return (
    <div className='calendar'>
      <h1 className='text-lg font-bold text-center py-4'>
        {months[dates[0]?.month]} {dates[0]?.year}
      </h1>

      <div className='flex flex-nowrap mt-4 overflow-x-scroll scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-slate-50'>
        {dates.map((day, index) => (
          <div
            key={index}
            className='p-4 flex-1 basis-1/7 border border-gray-200 text-center min-w-[150px] sm:min-w-[100px] min-h-[70vh]'
          >
            <p className='text-xs sm:text-sm text-gray-500'>
              {dayNames[day.day]}
            </p>
            <div
              className={`${today === day.day ? 'bg-black text-white rounded-lg' : ''
                }`}
            >
              <p className='text-lg sm:text-2xl font-semibold'>{day.date}</p>
            </div>
            <div className='space-y-1 py-6'>
              {getTasksForDate(day.date).map((task, index) => (
                <Todo key={index} data={task}/>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
