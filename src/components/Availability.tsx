'use client';

import { format, addMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth } from 'date-fns';
import { de } from 'date-fns/locale';
import { useState } from 'react';

// Example occupied dates (replace with your actual data)
const occupiedDates = [
    '2024-11-01',
    '2024-11-02',
    '2024-11-03',
    '2024-11-15',
    '2024-11-16',
];

export default function Availability() {
    const [currentDate, setCurrentDate] = useState(new Date());

    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(currentDate);
    const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

    const nextMonth = () => {
        setCurrentDate(addMonths(currentDate, 1));
    };

    const previousMonth = () => {
        setCurrentDate(addMonths(currentDate, -1));
    };

    const isOccupied = (date: Date) => {
        return occupiedDates.includes(format(date, 'yyyy-MM-dd'));
    };

    return (
        <section id="availability" className="py-20 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-emerald-800">Verfügbarkeit</h2>
                <div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex justify-between items-center mb-6">
                            <button
                                onClick={previousMonth}
                                className="p-2 hover:bg-gray-100 rounded-lg"
                            >
                                ←
                            </button>
                            <h3 className="text-xl font-semibold">
                                {format(currentDate, 'MMMM yyyy', { locale: de })}
                            </h3>
                            <button
                                onClick={nextMonth}
                                className="p-2 hover:bg-gray-100 rounded-lg"
                            >
                                →
                            </button>
                        </div>

                        <div className="grid grid-cols-7 gap-2 mb-2">
                            {['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].map((day) => (
                                <div key={day} className="text-center text-sm font-semibold">
                                    {day}
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-7 gap-2">
                            {daysInMonth.map((day) => (
                                <div
                                    key={day.toString()}
                                    className={`
                        aspect-square flex items-center justify-center rounded-lg text-sm
                        ${!isSameMonth(day, currentDate) ? 'text-gray-300' : ''}
                        ${
                                        isOccupied(day)
                                            ? 'bg-red-100 text-red-800'
                                            : 'bg-emerald-100 text-emerald-800'
                                    }
                        `}
                                >
                                    {format(day, 'd')}
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 flex gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 bg-emerald-100 rounded"></div>
                                <span>Verfügbar</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 bg-red-100 rounded"></div>
                                <span>Belegt</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}