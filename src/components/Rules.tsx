import { Clock, Ban, Info } from 'lucide-react';

export default function Rules() {
    return (
        <section id="rules" className="py-20 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-emerald-800">Hausregeln</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-2xl">
                        <h3 className="text-xl font-semibold mb-4">Check-in & Check-out</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Clock className="text-emerald-600 mt-1" size={20}/>
                                <div>
                                    <p className="font-semibold">Check-in: 15:00 - 20:00 Uhr</p>
                                    <p className="text-sm text-gray-600">Bitte informieren Sie uns im Voraus über
                                        Ihre Ankunftszeit</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Clock className="text-emerald-600 mt-1" size={20}/>
                                <div>
                                    <p className="font-semibold">Check-out: bis 12:00 Uhr</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-2xl">
                        <h3 className="text-xl font-semibold mb-4">Wichtige Hinweise</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-2">
                                <Ban className="text-emerald-600" size={20}/>
                                <span>Nichtraucherdomizil</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Ban className="text-emerald-600" size={20}/>
                                <span>Keine Haustiere erlaubt</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Ban className="text-emerald-600" size={20}/>
                                <span>Keine Partys oder Veranstaltungen</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Info className="text-emerald-600" size={20}/>
                                <span>Mindestalter für Check-in: 18 Jahre</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Additional Information */}
                <div className="mt-8 bg-white p-6 rounded-2xl">
                    <h3 className="text-xl font-semibold mb-4">Weitere Informationen</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <Info className="text-emerald-600 mt-1" size={20}/>
                            <span>Bitte teilen Sie uns Ihre voraussichtliche Ankunftszeit im Voraus mit.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Info className="text-emerald-600 mt-1" size={20}/>
                            <span>Baby- und Zustellbetten sind in dieser Unterkunft nicht verfügbar.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Info className="text-emerald-600 mt-1" size={20}/>
                            <span>Die Ferienwohnung ist für maximal 2 Personen ausgelegt.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

