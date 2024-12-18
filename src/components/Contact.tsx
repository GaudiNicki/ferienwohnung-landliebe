import { Mail, Send, MapPin, Calendar, Clock, Star } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-emerald-800">Kontakt & Buchung</h2>
                
                {/* Main Contact Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Host Information Card */}
                    <Card className="overflow-hidden border-none shadow-md">
                        <CardHeader className="bg-[#f8f5f1] pb-6">
                            <h3 className="text-2xl font-semibold text-emerald-900">Ihre Gastgeberin</h3>
                        </CardHeader>
                        <CardContent className="p-6">
                            <div className="flex flex-col">
                                <div className="flex flex-col md:flex-row gap-6">
                                    {/* Host Image */}
                                    <div className="w-full md:w-1/3">
                                        <div className="aspect-square relative rounded-xl overflow-hidden shadow-lg">
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

                                    {/* Host Information */}
                                    <div className="w-full md:w-2/3">
                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="text-xl font-semibold mb-2">Kerstin Witzel</h4>
                                            </div>
                                            
                                            <p className="text-gray-600">
                                                Als Ihre Gastgeberin möchte ich Ihnen einen angenehmen und erholsamen Aufenthalt ermöglichen.
                                                Die Ferienwohnung wurde mit viel Liebe zum Detail eingerichtet und bietet Ihnen allen Komfort für
                                                einen entspannten Aufenthalt in der malerischen Rhön.
                                            </p>

                                            <div className="space-y-2 text-gray-600">
                                                <div className="flex items-center gap-2">
                                                    <Mail className="text-emerald-600 w-5 h-5" />
                                                    <a href="mailto:kontakt@ferienwohnunglandliebe.de" className="hover:text-emerald-900 transition-colors">
                                                        kontakt@ferienwohnunglandliebe.de
                                                    </a>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Clock className="text-emerald-600 w-5 h-5" />
                                                    <span>Antwort innerhalb von 24 Stunden</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center mt-4 gap-4">
                                    {/* Contact CTA */}
                                    <div className="mt-2 p-4 bg-emerald-50 rounded-xl">
                                        <p className="text-sm">
                                            Haben Sie Fragen? Kontaktieren Sie uns gerne - wir helfen Ihnen bei der Planung Ihres Aufenthalts.
                                        </p>
                                    </div>

                                    {/* Contact Button */}
                                    <div>
                                        <Button className="w-full bg-emerald-800 hover:bg-emerald-900">
                                            <a href="mailto:kontakt@ferienwohnunglandliebe.de" className="flex items-center justify-center gap-2">
                                                <Mail className="w-4 h-4" />
                                                Nachricht senden
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Booking Process Card */}
                    <Card className="overflow-hidden border-none shadow-md">
                        <CardHeader className="bg-[#f8f5f1] pb-6">
                            <h3 className="text-2xl font-semibold text-emerald-900">Buchungsprozess</h3>
                        </CardHeader>
                        <CardContent className="p-6">
                            <div className="space-y-8">
                                {/* Step 1 */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-semibold">
                                        1
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg text-emerald-800 mb-2">Verfügbarkeit prüfen</h4>
                                        <p className="text-gray-600">Nutzen Sie unseren Kalender, um die Verfügbarkeit Ihres Wunschzeitraums zu prüfen.</p>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-semibold">
                                        2
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg text-emerald-800 mb-2">Anfrage senden</h4>
                                        <p className="text-gray-600 mb-3">Bitte teilen Sie uns mit:</p>
                                        <ul className="space-y-2 text-gray-600">
                                            <li className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4 text-emerald-600" />
                                                <span>Gewünschter Zeitraum</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <Send className="w-4 h-4 text-emerald-600" />
                                                <span>Ihre Kontaktdaten</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-semibold">
                                        3
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg text-emerald-800 mb-2">Bestätigung</h4>
                                        <p className="text-gray-600">Sie erhalten von uns zeitnah eine Rückmeldung mit allen weiteren Informationen.</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}