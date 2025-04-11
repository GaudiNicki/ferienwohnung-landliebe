'use client';

import { format, addMonths, startOfMonth, endOfMonth, eachDayOfInterval, isWithinInterval, parseISO, addDays, getDay } from 'date-fns';
import { de } from 'date-fns/locale';
import { useState } from 'react';
import { useSettingsStore } from '@/store/settings';

export default function Availability() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const { blockedPeriods } = useSettingsStore();

    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(currentDate);
    const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

    // Get the days from the current month
    const calendarDays = daysInMonth;
    
    // Calculate the day of week for the first day of month (adjusted for Monday start)
    const firstDayOfMonthIndex = getDay(monthStart);
    const firstWeekdayIndex = firstDayOfMonthIndex === 0 ? 6 : firstDayOfMonthIndex - 1; // Convert to Monday=0, Sunday=6
    
    // Generate the days from the previous month to fill the start of the calendar
    const prevMonthDays = [];
    if (firstWeekdayIndex > 0) {
        const prevMonthEnd = addDays(monthStart, -1);
        for (let i = firstWeekdayIndex - 1; i >= 0; i--) {
            prevMonthDays.unshift(addDays(prevMonthEnd, -i));
        }
    }

    const nextMonth = () => {
        setCurrentDate(addMonths(currentDate, 1));
    };

    const previousMonth = () => {
        setCurrentDate(addMonths(currentDate, -1));
    };

    const isOccupied = (date: Date) => {
        return blockedPeriods.some(period => {
            const startDate = parseISO(period.startDate);
            const endDate = parseISO(period.endDate);
            
            return isWithinInterval(date, { start: startDate, end: endDate });
        });
    };

    return (
        <section id="availability" className="p-8 lg:py-20 lg:px-8 bg-emerald-50">
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
                            {/* Previous month days (greyed out) */}
                            {prevMonthDays.map((day) => (
                                <div
                                    key={`prev-${day.toString()}`}
                                    className="aspect-square flex items-center justify-center rounded-lg text-sm text-gray-300 bg-gray-50"
                                >
                                    {format(day, 'd')}
                                </div>
                            ))}
                            
                            {/* Current month days */}
                            {calendarDays.map((day) => (
                                <div
                                    key={day.toString()}
                                    className={`
                                        aspect-square flex items-center justify-center rounded-lg text-sm
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
                            
                            {/* Empty cells for days after the end of the month */}
                            {Array.from({ length: (7 - ((prevMonthDays.length + calendarDays.length) % 7)) % 7 }).map((_, index) => (
                                <div 
                                    key={`empty-end-${index}`} 
                                    className="aspect-square rounded-lg"
                                />
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