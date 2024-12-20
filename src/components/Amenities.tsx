import { CookingPot, Check, Home, Tv } from 'lucide-react';

export default function Amenities() {
    return (
        <section id="amenities" className="p-8 lg:py-20 lg:px-8 bg-emerald-50">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3xl font-bold text-emerald-800">Ausstattung</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Kitchen */}
                    <div className="bg-white p-6 rounded-2xl">
                        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                            <CookingPot className="text-emerald-600" size={24}/>
                            Küche
                        </h3>
                        <ul className="space-y-3">
                            {[
                                'Voll ausgestattete Küche',
                                'Geschirrspüler',
                                'Mikrowelle',
                                'Kaffeemaschine',
                                'Kühlschrank',
                                'Wasserkocher',
                                'Toaster',
                                'Küchenzeile',
                                'Küchenutensilien',
                                'Backofen',
                                'Herdplatte'
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-2">
                                    <Check className="text-emerald-600" size={20}/>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Living Area */}
                    <div className="bg-white p-6 rounded-2xl">
                        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                            <Home className="text-emerald-600" size={24}/>
                            Wohnbereich
                        </h3>
                        <ul className="space-y-3">
                            {[
                                'Sitzbereich',
                                'Essbereich',
                                'Gartenblick',
                                'Bettwäsche',
                                'Handtücher',
                                'Wäscheständer',
                                'Bügeleisen',
                                'Holz- oder Parkettböden',
                                'Heizung'
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-2">
                                    <Check className="text-emerald-600" size={20}/>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Media & Technology */}
                    <div className="bg-white p-6 rounded-2xl">
                        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                            <Tv className="text-emerald-600" size={24}/>
                            Medien & Technik
                        </h3>
                        <ul className="space-y-3">
                            {[
                                'Flachbild-TV',
                                'Satellitenempfang',
                                'DVD-Player',
                                'Radio',
                                'Kostenfreies WLAN',
                                'TV',
                                'Steckdose in Bettnähe'
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-2">
                                    <Check className="text-emerald-600" size={20}/>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Additional Features */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-2xl">
                        <h3 className="text-xl font-semibold mb-4">Badezimmer</h3>
                        <ul className="space-y-3">
                            {[
                                'Eigenes Badezimmer',
                                'Dusche',
                                'WC',
                                'Toilettenpapier',
                                'Handtücher'
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-2">
                                    <Check className="text-emerald-600" size={20}/>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-2xl">
                        <h3 className="text-xl font-semibold mb-4">Außenbereich & Parken</h3>
                        <ul className="space-y-3">
                            {[
                                'Kostenfreie Parkplätze an der Straße',
                                'Gartenblick',
                                'Nichtraucherbereich',
                                'Obere Stockwerke nur über Treppe erreichbar'
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-2">
                                    <Check className="text-emerald-600" size={20}/>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}