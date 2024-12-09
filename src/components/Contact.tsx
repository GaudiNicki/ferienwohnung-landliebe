import { Star, Mail, Check, Clock, } from 'lucide-react';
import Image from 'next/image';

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-emerald-800">Kontakt & Buchung</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Host Information */}
                    <div className="bg-white p-6 rounded-2xl">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="w-full md:w-1/3">
                                <div className="aspect-square relative rounded-xl overflow-hidden">
                                    <Image
                                        src="/host.jpg"
                                        alt="Kerstin Witzel"
                                        width="0"
                                        height="0"
                                        sizes="100vw"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-2/3">
                                <h3 className="text-2xl font-semibold mb-4">Kerstin Witzel</h3>
                                <div className="prose max-w-none text-gray-600">
                                    <p className="text-lg mb-4">
                                        Als Ihre Gastgeberin möchte ich Ihnen einen angenehmen und erholsamen Aufenthalt ermöglichen.
                                        Die Ferienwohnung wurde mit viel Liebe zum Detail eingerichtet und bietet Ihnen allen Komfort für
                                        einen entspannten Aufenthalt in der malerischen Rhön.
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <p className="text-gray-600">Spricht: Deutsch</p>
                                </div>
                                <div className="mt-4 flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <Star className="text-yellow-400" />
                                        <span className="font-semibold">9,3</span>
                                    </div>
                                    <span className="text-gray-600">·</span>
                                    <span className="text-gray-600">Superhost seit 2020</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 pt-6 border-t border-gray-100">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center gap-2">
                                    <Mail className="text-emerald-600" size={20}/>
                                    <a href="mailto:kontakt@ferienwohnunglandliebe.de" className="hover:text-emerald-600">
                                        kontakt@ferienwohnunglandliebe.de
                                    </a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="text-emerald-600" size={20}/>
                                    <span>Antwort in 24 Stunden</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Instructions */}
                    <div className="bg-white p-6 rounded-2xl">
                        <h3 className="text-xl font-semibold mb-6">So können Sie buchen</h3>
                        
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-semibold mb-3 text-emerald-800">1. Verfügbarkeit prüfen</h4>
                                <p className="text-gray-600">Schauen Sie im Kalender nach, ob Ihr Wunschzeitraum noch frei ist.</p>
                            </div>
                            
                            <div>
                                <h4 className="font-semibold mb-3 text-emerald-800">2. Anfrage senden</h4>
                                <p className="text-gray-600 mb-4">Für Ihre Anfrage benötigen wir folgende Informationen:</p>
                                <ul className="space-y-3">
                                    {[
                                        'Gewünschter Zeitraum (Anreise- und Abreisetag)',
                                        'Anzahl der Personen',
                                        'Name und Anschrift',
                                        'Telefonnummer für Rückfragen'
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-2">
                                            <Check className="text-emerald-600" size={20}/>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div>
                                <h4 className="font-semibold mb-3 text-emerald-800">3. Bestätigung abwarten</h4>
                                <p className="text-gray-600">Nach Ihrer Anfrage erhalten Sie von uns:</p>
                                <ul className="mt-2 space-y-2">
                                    <li className="flex items-center gap-2">
                                        <Check className="text-emerald-600" size={20}/>
                                        <span>Eine Bestätigung der Verfügbarkeit</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="text-emerald-600" size={20}/>
                                        <span>Detaillierte Buchungsinformationen</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="text-emerald-600" size={20}/>
                                        <span>Zahlungsinformationen</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 p-4 bg-emerald-50 rounded-lg">
                            <p className="text-sm text-emerald-800">
                                Haben Sie noch Fragen? Zögern Sie nicht, uns zu kontaktieren. Wir helfen Ihnen gerne bei der Planung Ihres Aufenthalts.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}