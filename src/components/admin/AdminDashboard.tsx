'use client';

import { Star, Euro, Calendar } from 'lucide-react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import RatingsManagement from '@/components/admin/RatingsManagement';
import PricesManagement from '@/components/admin/PricesManagement';
import AvailabilityManagement from '@/components/admin/AvailabilityManagement';

export default function AdminDashboard() {
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

                <Tabs defaultValue="ratings">
                    <TabsList>
                        <TabsTrigger value="ratings" className="flex gap-2">
                            <Star size={16} />
                            Bewertungen
                        </TabsTrigger>
                        <TabsTrigger value="prices" className="flex gap-2">
                            <Euro size={16} />
                            Preise
                        </TabsTrigger>
                        <TabsTrigger value="availability" className="flex gap-2">
                            <Calendar size={16} />
                            Verfügbarkeit
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="ratings">
                        <RatingsManagement />
                    </TabsContent>

                    <TabsContent value="prices">
                        <PricesManagement />
                    </TabsContent>

                    <TabsContent value="availability">
                        <AvailabilityManagement />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}