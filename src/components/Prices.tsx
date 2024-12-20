'use client';

import { Info } from 'lucide-react';
import { useSettingsStore } from '@/store/settings';

export default function Prices() {
    const { prices } = useSettingsStore();

    return (
        <section id="prices" className="p-8 lg:py-20 lg:px-8 bg-emerald-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-emerald-800">Preise</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-2xl">
                        <div className="text-center mb-6">
                            <h3 className="text-xl font-semibold">Oktober - April</h3>
                            <p className="text-4xl font-bold mt-4">ab {prices.winterPrice}€ <span
                                className="text-base font-normal text-gray-600">/Nacht</span></p>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex justify-between items-center">
                                <span>1-2 Personen</span>
                                <span className="font-semibold">{prices.winterPrice}€ / Nacht</span>
                            </li>
                            <li className="flex justify-between items-center">
                                <span>Mindestaufenthalt</span>
                                <span className="font-semibold">{prices.minStay} Nächte</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-2xl">
                        <div className="text-center mb-6">
                            <h3 className="text-xl font-semibold">Mai - September</h3>
                            <p className="text-4xl font-bold mt-4">ab {prices.summerPrice}€ <span
                                className="text-base font-normal text-gray-600">/Nacht</span></p>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex justify-between items-center">
                                <span>1-2 Personen</span>
                                <span className="font-semibold">{prices.summerPrice}€ / Nacht</span>
                            </li>
                            <li className="flex justify-between items-center">
                                <span>Mindestaufenthalt</span>
                                <span className="font-semibold">{prices.minStay} Nächte</span>
                            </li>
                        </ul>
                    </div>

                    {/* Additional Costs */}
                    <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-2xl">
                        <h3 className="text-xl font-semibold mb-4">Zusätzliche Kosten</h3>
                        <ul className="space-y-4">
                            <li className="flex justify-between items-center">
                                <span>Endreinigung</span>
                                <span className="font-semibold">{prices.cleaningFee}€ einmalig</span>
                            </li>
                            <li className="flex items-start gap-2 text-gray-600">
                                <Info className="shrink-0 mt-1" size={20}/>
                                <span>Alle Preise verstehen sich inklusive Bettwäsche, Handtücher und Nebenkosten.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}