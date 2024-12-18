import { Home, Users, Wifi, Car, MapPin, Coffee } from 'lucide-react';

const rating: Rating = {
    overallScore: 9.4,
    ratingSummary: "Hervorragend",
    guestRatings: [
        {
            name: "Silke",
            text: "Eine saubere und gepflegte Ferienwohnung mit netten Vermietern.",
            score: 10.0,
            visible: true
        },
        {
            name: "Patricia",
            text: "atmosphärisches Appartement, liebevoll eingerichtet.",
            score: 8.0,
            visible: true
        },
        {
            name: "Martina",
            text: "Sehr gut ausgestattete Wohnung. Mit viel Liebe zu Detail wurde an alles gedacht.",
            score: 9.0,
            visible: true
        }
    ]
}

export default function Overview() {
    return (
        <section id="overview" className="py-20 px-4 bg-emerald-50">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="w-full md:w-2/3">
                        <h2 className="text-3xl font-bold mb-6 text-emerald-800">Ihre Ferienwohnung Landliebe</h2>
                        <div className="prose max-w-none text-gray-600">
                            <p className="text-lg mb-4">
                                Die Ferienwohnung Landliebe liegt in Kerzell, das ist ein Ortsteil von Eichenzell in der Nähe von Fulda. 
                                Unsere renovierte gemütliche Altbau-Ferienwohnung für zwei Personen befindet sich im idyllischen Kerzell. 
                                Mit dem Auto ist Kerzell ca 8 km südlich von der Stadt Fulda und ist gut über die A7/A66 oder die B27 zu erreichen.
                            </p>
                            <p className="text-lg">
                                Rund um Kerzell gibt es viele Möglichkeiten sich die Zeit zu vertreiben. Wer gerne wandert oder Fahrrad fährt,
                                findet hier einige tolle Wanderwege und Fahrradwege. Der Fahrradweg R1 geht direkt an Kerzell vorbei und führt z.b. nach Fulda.
                                Anspruchsvolle Wanderstrecken gibt es in der nahegelegenen Rhön mit dem Höchsten Berg von Hessen der Wasserkuppe.
                            </p>
                        </div>

                        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6">
                            <div className="flex items-center gap-2">
                                <Home className="text-emerald-600" size={20}/>
                                <span>40 m² Wohnfläche</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="text-emerald-600" size={20}/>
                                <span>Für 2 Personen</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Wifi className="text-emerald-600" size={20}/>
                                <span>Kostenloses WLAN</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Car className="text-emerald-600" size={20}/>
                                <span>Kostenfreie Parkplätze</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="text-emerald-600" size={20}/>
                                <span>Gute Lage</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Coffee className="text-emerald-600" size={20}/>
                                <span>Komplett ausgestattet</span>
                            </div>
                        </div>
                    </div>

                    {/* Reviews Preview */}
                    <div className="w-full md:w-1/3">
                        <div className="bg-white p-6 rounded-2xl shadow-sm">
                            <h3 className="text-xl font-semibold mb-4">Gästebewertungen</h3>
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-3xl font-bold text-emerald-600">{rating.overallScore.toString().replace(".", ",")}</span>
                                <div>
                                    <p className="font-semibold">{rating.ratingSummary}</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                {rating.guestRatings.map((guestRating, key) => (
                                    guestRating.visible &&
                                        <div key={key} className={key !== rating.guestRatings.length - 1 ? "border-b pb-4" : ""}>
                                            <p className="italic text-gray-600">{guestRating.text}</p>
                                            <p className="text-sm text-gray-500 mt-2">- {guestRating.name}, Bewertung: {guestRating.score} / 10</p>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

