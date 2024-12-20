'use client';

import { Calendar, Plus, X } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useSettingsStore } from '@/store/settings';

export default function AvailabilityManagement() {
  const { blockedPeriods, setBlockedPeriods } = useSettingsStore();

  const handleBlockedPeriodAdd = () => {
    const startInput = document.getElementById('new-period-start') as HTMLInputElement;
    const endInput = document.getElementById('new-period-end') as HTMLInputElement;
    const reasonInput = document.getElementById('new-period-reason') as HTMLInputElement;
    
    if (startInput?.value && endInput?.value && reasonInput?.value) {
      const newPeriod = {
        id: Date.now().toString(),
        startDate: startInput.value,
        endDate: endInput.value,
        reason: reasonInput.value
      };
      
      setBlockedPeriods([...blockedPeriods, newPeriod]);
      
      // Clear inputs
      startInput.value = '';
      endInput.value = '';
      reasonInput.value = '';
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col lg:flex-row justify-between items-start sm:items-center gap-4">
          <CardTitle>Gesperrte Zeiträume verwalten</CardTitle>
          <div className="w-full lg:w-auto">
            <div className="flex flex-col lg:flex-row gap-2 w-full">
              <div className="flex flex-col lg:flex-row gap-2 w-full lg:w-auto">
                <Input
                  id="new-period-start"
                  type="date"
                  className="w-full h-full lg:w-40"
                  placeholder="Startdatum"
                />
                <Input
                  id="new-period-end"
                  type="date"
                  className="w-full h-full lg:w-40"
                  placeholder="Enddatum"
                />
                <Input
                  id="new-period-reason"
                  placeholder="Gast"
                  className="w-full h-full lg:w-40"
                />
                <Button 
                  onClick={handleBlockedPeriodAdd} 
                  variant="default" 
                  size="sm"
                  className="w-full h-full lg:w-auto"
                >
                  <Plus size={16} className="mr-2" />
                  <span className="hidden sm:inline">Zeitraum hinzufügen</span>
                  <span className="sm:hidden">Hinzufügen</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {blockedPeriods.sort((a, b) => a.startDate.localeCompare(b.startDate)).map((period) => (
            <div key={period.id} className="flex flex-row items-start items-center justify-between bg-gray-100 p-4 rounded gap-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full">
                <div className="flex flex-wrap items-center gap-2">
                  <Calendar size={16} className="text-gray-500" />
                  <span>{format(parseISO(period.startDate), 'dd.MM.yyyy')}</span>
                  <span>-</span>
                  <span>{format(parseISO(period.endDate), 'dd.MM.yyyy')}</span>
                </div>
                <div className="text-gray-600">
                  {period.reason}
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setBlockedPeriods(blockedPeriods.filter(p => p.id !== period.id));
                }}
                className="self-end sm:self-center"
              >
                <X size={16} />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}