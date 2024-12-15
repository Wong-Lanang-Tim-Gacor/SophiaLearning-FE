import React, { useState, useEffect } from 'react'
import { dayNames, months } from '@/utils/CalendarUtility'
import Todo from '@/components/ui/Todo'
import { getCalendar } from "@/services/ResourceService.jsx";

const Calendar = () => {
  const [dates, setDates] = useState([]);
  const [tasks, setTasks] = useState([]);
  const today = new Date().getDay();

  // Menghitung tanggal selama 7 hari ke depan
  useEffect(() => {
    const todayDate = new Date();
    const days = [];
    for (let i = 0; i < 7; i++) {
      const nextDay = new Date(todayDate);
      nextDay.setDate(todayDate.getDate() + i);
      days.push({
        date: nextDay.getDate(),
        day: nextDay.getDay(),
        month: nextDay.getMonth(),
        year: nextDay.getFullYear(),
      });
    }
    setDates(days);
  }, []);

  // Fungsi untuk memformat tanggal menjadi format YYYY-MM-DD untuk perbandingan
  const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`;
  }

  // Mengambil tugas berdasarkan tanggal, bulan, dan tahun
  const getTasksForDate = (day) => {
    const formattedDay = formatDate(new Date(day.year, day.month, day.date));
    const filteredTasks = tasks.filter((task) => formatDate(task.due_date) === formattedDay);

    return filteredTasks;
  };

  // Mengambil data tugas dari API
  useEffect(() => {
    const getAssignment = async () => {
      try {
        const response = await getCalendar();
        setTasks(response.data || []);  // Pastikan setTasks dengan array kosong jika tidak ada data
      } catch (e) {
        console.error(e);
      }
    };
    getAssignment();
  }, []);

  return (
      <div className="calendar">
        <h1 className="text-lg font-bold text-center py-4">
          {months[dates[0]?.month]} {dates[0]?.year}
        </h1>

        <div className="flex flex-nowrap mt-4 overflow-x-scroll scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-slate-50">
          {dates.map((day, index) => (
              <div
                  key={index}
                  className="p-4 flex-1 basis-1/7 border border-gray-200 text-center min-w-[150px] sm:min-w-[100px] min-h-[70vh]"
              >
                <p className="text-xs sm:text-sm text-gray-500">
                  {dayNames[day.day]}
                </p>
                <div
                    className={`${today === day.day ? 'bg-black text-white rounded-lg' : ''}`}
                >
                  <p className="text-lg sm:text-2xl font-semibold">{day.date}</p>
                </div>
                <div className="space-y-1 py-6">
                  {getTasksForDate(day).map((task, taskIndex) => (
                      <Todo key={taskIndex} data={task} />
                  ))}
                </div>
              </div>
          ))}
        </div>
      </div>
  );
};

export default Calendar;
