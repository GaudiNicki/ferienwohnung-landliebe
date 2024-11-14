import { Star } from 'lucide-react';

export function HostSection() {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-emerald-800">Ihre Gastgeberin</h2>
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    <div className="w-full md:w-1/3">
                        <div className="aspect-square relative rounded-2xl overflow-hidden">
                            <img
                                src="/host.jpg"
                                alt="Kerstin Witzel"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-2/3">
                        <h3 className="text-2xl font-semibold mb-4">Kerstin Witzel</h3>
                        <div className="prose max-w-none text-gray-600">
                            <p className="text-lg mb-6">
                                Die renovierte gemütliche Altbau-Ferienwohnung für zwei Personen befindet sich im idyllischen Kerzell.
                                Als Ihre Gastgeberin möchte ich Ihnen einen angenehmen und erholsamen Aufenthalt ermöglichen.
                            </p>
                            <p className="text-lg mb-6">
                                Die Ferienwohnung wurde mit viel Liebe zum Detail eingerichtet und bietet Ihnen allen Komfort für
                                einen entspannten Aufenthalt in der malerischen Rhön.
                            </p>
                        </div>
                        <div className="mt-8">
                            <h4 className="font-semibold mb-2">Sprachen:</h4>
                            <p>Deutsch</p>
                        </div>
                        <div className="mt-8 flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <Star className="text-yellow-400" />
                                <span className="font-semibold">9,3</span>
                            </div>
                            <span className="text-gray-600">·</span>
                            <span className="text-gray-600">Superhost seit 2020</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}