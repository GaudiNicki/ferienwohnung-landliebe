'use client';

import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { useSettingsStore } from '@/store/settings';

export default function PricesManagement() {
  const { prices, setPrices } = useSettingsStore();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Preise verwalten</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>1 Person (€)</Label>
              <Input
                type="number"
                value={prices.onePerson}
                onChange={(e) => setPrices({...prices, onePerson: parseInt(e.target.value)})}
              />
            </div>
            <div className="space-y-2">
              <Label>2 Personen (€)</Label>
              <Input
                type="number"
                value={prices.twoPersons}
                onChange={(e) => setPrices({...prices, twoPersons: parseInt(e.target.value)})}
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Endreinigung (€)</Label>
              <Input
                type="number"
                value={prices.cleaningFee}
                onChange={(e) => setPrices({...prices, cleaningFee: parseInt(e.target.value)})}
              />
            </div>
            <div className="space-y-2">
              <Label>Mindestaufenthalt (Nächte)</Label>
              <Input
                type="number"
                value={prices.minStay}
                onChange={(e) => setPrices({...prices, minStay: parseInt(e.target.value)})}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}