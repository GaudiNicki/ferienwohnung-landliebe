import { CookingPot, Check, Home, BedDouble, Bath, DoorOpen } from 'lucide-react';

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
                                'Backofen mit Ceranfeld',
                                'Geschirrspüler',
                                'Kühlschrank mit Gefrierfach',
                                'Mikrowelle',
                                'Kaffeemaschine',
                                'Wasserkocher',
                                'Toaster',
                                'Geschirr',
                                'Küchenutensilien',
                                'Sitzgelegenheit',
                                'Radio'
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-2">
                                    <Check className="text-emerald-600" size={20}/>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Sleeping Area */}
                    <div className="bg-white p-6 rounded-2xl">
                        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                            <BedDouble className="text-emerald-600" size={24}/>
                            Schlafbereich
                        </h3>
                        <ul className="space-y-3">
                            {[
                                'Doppelbett',
                                'Fernseher',
                                'DVD-Player',
                                'Sitzgelegenheit',
                                'Steckdose in Bettnähe'
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-2">
                                    <Check className="text-emerald-600" size={20}/>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Hallway Area */}
                    <div className="bg-white p-6 rounded-2xl">
                        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                            <DoorOpen className="text-emerald-600" size={24}/>
                            Flur
                        </h3>
                        <ul className="space-y-3">
                            {[
                                'Garderobe',
                                'Sideboard',
                                'Sessel'
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-2">
                                    <Check className="text-emerald-600" size={20}/>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bathroom Features */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-2xl">
                        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                            <Bath className="text-emerald-600" size={24}/>
                            Badezimmer
                        </h3>
                        <ul className="space-y-3">
                            {[
                                'Dusche',
                                'WC',
                                'Waschbecken',
                                'Spiegelschrank',
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

                    {/* Additional Features */}
                    <div className="bg-white p-6 rounded-2xl">
                        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                            <Home className="text-emerald-600" size={24}/>
                            Sonstiges
                        </h3>
                        <ul className="space-y-3">
                            {[
                                'Kostenfreies WLAN',
                                'Kostenfreie Parkplätze',
                                'Bettwäsche und Handtücher',
                                'Nichtraucherwohnung',
                                'Keine Haustiere',
                                'Ferienwohnung nur über Treppe erreichbar'
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