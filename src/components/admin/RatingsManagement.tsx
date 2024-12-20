'use client';

import { Plus, X } from 'lucide-react';

import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

import { useSettingsStore } from '@/store/settings';

export default function RatingsManagement() {
  const { ratings, overallRating, setRatings, setOverallRating } = useSettingsStore();

  const handleRatingDelete = (index: number) => {
    const newRatings = [...ratings];
    newRatings.splice(index, 1);
    setRatings(newRatings);
  };

  const handleRatingAdd = () => {
    if (ratings.length < 10) {
      setRatings([...ratings, {
        name: '',
        text: '',
        score: 5.0,
        visible: false
      }]);
    }
  };

  const handleVisibilityToggle = (index: number) => {    
    const newRatings = [...ratings];
    newRatings[index].visible = !newRatings[index].visible;
    setRatings(newRatings);
  };

  return (
    <div className="space-y-6">
      {/* Overall Rating Configuration */}
      <Card>
        <CardHeader>
          <CardTitle>Gesamtbewertung</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Gesamtpunktzahl (0-10)</Label>
                <Input
                  type="number"
                  min="0"
                  max="10"
                  step="0.1"
                  value={overallRating.score}
                  onChange={(e) => setOverallRating({
                    ...overallRating,
                    score: parseFloat(e.target.value)
                  })}
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Zusammenfassung</Label>
                <Input
                  value={overallRating.summary}
                  onChange={(e) => setOverallRating({
                    ...overallRating,
                    summary: e.target.value
                  })}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Individual Ratings */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Bewertungen verwalten</CardTitle>
            <Button onClick={handleRatingAdd} variant="outline" size="sm">
              <Plus size={16} className="mr-2" />
              Neue Bewertung
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {ratings.map((rating, index) => (
              <div key={index} className="border p-4 rounded-lg relative">
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-2"
                  onClick={() => handleRatingDelete(index)}
                >
                  <X size={16} />
                </Button>
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Name</Label>
                      <Input
                        value={rating.name}
                        onChange={(e) => {
                          const newRatings = [...ratings];
                          newRatings[index].name = e.target.value;
                          setRatings(newRatings);
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Bewertung (0-10)</Label>
                      <Input
                        type="number"
                        min="0"
                        max="10"
                        step="0.1"
                        value={rating.score}
                        onChange={(e) => {
                          const newRatings = [...ratings];
                          newRatings[index].score = parseFloat(e.target.value);
                          setRatings(newRatings);
                        }}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Text</Label>
                    <Textarea
                      value={rating.text}
                      onChange={(e) => {
                        const newRatings = [...ratings];
                        newRatings[index].text = e.target.value;
                        setRatings(newRatings);
                      }}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={rating.visible}
                      onChange={() => handleVisibilityToggle(index)}
                      className="h-4 w-4 rounded border-gray-300"
                    />
                    <span className="text-sm text-gray-600">Auf Website anzeigen</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}