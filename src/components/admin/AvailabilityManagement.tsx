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
        <div className="flex justify-between items-center">
          <CardTitle>Gesperrte Zeiträume verwalten</CardTitle>
          <div className="flex align-end gap-2">
            <div className="flex align-end gap-2">
              <Input
                id="new-period-start"
                type="date"
                className="w-40"
                placeholder="Startdatum"
              />
              <Input
                id="new-period-end"
                type="date"
                className="w-40"
                placeholder="Enddatum"
              />
              <Input
                id="new-period-guest"
                placeholder="Gast"
                className="w-48"
              />
              <Button onClick={handleBlockedPeriodAdd} variant="default" size="sm">
                <Plus size={16} className="mr-2" />
                Zeitraum hinzufügen
              </Button>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {blockedPeriods.sort((a, b) => a.startDate.localeCompare(b.startDate)).map((period) => (
            <div key={period.id} className="flex items-center justify-between bg-gray-100 p-4 rounded">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
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