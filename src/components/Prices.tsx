import { Info } from 'lucide-react';

export default function Prices() {
    return (
        <section id="prices" className="py-20 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-emerald-800">Preise</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-2xl">
                            <div className="text-center mb-6">
                                <h3 className="text-xl font-semibold">Oktober - April</h3>
                                <p className="text-4xl font-bold mt-4">ab 45€ <span
                                    className="text-base font-normal text-gray-600">/Nacht</span></p>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex justify-between items-center">
                                    <span>1-2 Personen</span>
                                    <span className="font-semibold">45€ / Nacht</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span>Mindestaufenthalt</span>
                                    <span className="font-semibold">2 Nächte</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-2xl">
                            <div className="text-center mb-6">
                                <h3 className="text-xl font-semibold">Mai - September</h3>
                                <p className="text-4xl font-bold mt-4">ab 70€ <span
                                    className="text-base font-normal text-gray-600">/Nacht</span></p>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex justify-between items-center">
                                    <span>1-2 Personen</span>
                                    <span className="font-semibold">70€ / Nacht</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span>Mindestaufenthalt</span>
                                    <span className="font-semibold">2 Nächte</span>
                                </li>
                            </ul>
                        </div>

                        {/* Additional Costs */}
                        <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-2xl">
                            <h3 className="text-xl font-semibold mb-4">Zusätzliche Kosten</h3>
                            <ul className="space-y-4">
                                <li className="flex justify-between items-center">
                                    <span>Endreinigung</span>
                                    <span className="font-semibold">40€ einmalig</span>
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