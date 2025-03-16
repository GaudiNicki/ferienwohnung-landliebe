'use client';

import { Euro, Calendar } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PricesManagement from '@/components/admin/PricesManagement';
import AvailabilityManagement from '@/components/admin/AvailabilityManagement';

export default function AdminDashboard() {
    return (
        <div className="min-h-screen bg-gray-50 p-8 sm:p-6 md:p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 md:mb-8">Admin Dashboard</h1>

                <Tabs defaultValue="ratings" className="w-full">
                    <TabsList className="w-full justify-start flex-wrap gap-2 h-auto bg-transparent p-0">
                        <TabsTrigger 
                            value="prices" 
                            className="flex gap-2 data-[state=active]:bg-emerald-100"
                        >
                            <Euro size={16} />
                            <span className="hidden sm:inline">Preise</span>
                        </TabsTrigger>
                        <TabsTrigger 
                            value="availability" 
                            className="flex gap-2 data-[state=active]:bg-emerald-100"
                        >
                            <Calendar size={16} />
                            <span className="hidden sm:inline">Verfügbarkeit</span>
                        </TabsTrigger>
                    </TabsList>

                    <div className="mt-4 sm:mt-6">
                        <TabsContent value="prices">
                            <PricesManagement />
                        </TabsContent>

                        <TabsContent value="availability">
                            <AvailabilityManagement />
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </div>
    );
}