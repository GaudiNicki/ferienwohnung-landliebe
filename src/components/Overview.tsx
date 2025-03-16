"use client";

import {
  Home,
  Users,
  Wifi,
  Car,
  Ban,
  Accessibility,
} from "lucide-react";

export default function Overview() {
  
  return (
    <section id="overview" className="p-8 lg:py-20 lg:px-8 bg-emerald-50">
      <div className="max-w-7xl mx-auto">
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-6 text-emerald-800">
            Ihre Ferienwohnung Landliebe
          </h2>
          <div className="prose max-w-none text-gray-600">
            <p className="text-lg mb-4">
              Die Ferienwohnung Landliebe liegt in Kerzell, einem idyllischen
              Ortsteil von Eichenzell in der Nähe von Fulda. Unsere renovierte
              gemütliche Altbau-Ferienwohnung für zwei Personen ist mit dem Auto
              ca. 8 km südlich von der Stadt Fulda und gut über die A7/A66 oder
              die B27 zu erreichen.
            </p>
            <p className="text-lg mb-4">
              Rund um Kerzell gibt es viele Möglichkeiten sich die Zeit zu
              vertreiben. Wer gerne wandert oder Fahrrad fährt, findet hier
              einige tolle Wege. Die nahegelegene Rhön bietet mit dem höchsten
              Berg Hessens, der Wasserkuppe (950 m), ein wahres Naturparadies.
              Hier können Besucher das Radom-Museum besuchen, Gleitschirmflieger
              beobachten oder im Winter die Skipisten nutzen. Auch die markante
              Milseburg mit ihrer beeindruckenden Basaltkuppe und das Kloster
              Kreuzberg mit seiner berühmten Wallfahrtskirche und eigenen
              Brauerei sind beliebte Ausflugsziele in der Rhön. Das
              UNESCO-Biosphärenreservat Rhön verzaubert mit seiner einzigartigen
              Kulturlandschaft aus Hochflächen, sanften Kuppen und artenreichen
              Wiesen. Besonders sehenswert sind auch das Schwarze Moor und das
              Rote Moor mit ihren Naturlehrpfaden.
            </p>
            <p className="text-lg">
              Die Barockstadt Fulda bietet mit ihrem Dom, dem Stadtschloss und
              der historischen Altstadt zahlreiche kulturelle
              Sehenswürdigkeiten, die einen Tagesausflug wert sind. Besonders
              sehenswert ist der prachtvolle Schlossgarten mit seinen
              Brunnenanlagen und der Orangerie. Wer nach einem Stadtbummel durch
              die Fußgängerzone mit ihren vielen Einkaufsmöglichkeiten eine
              Pause braucht, findet in den gemütlichen Cafés und Restaurants der
              Altstadt Erholung. Regelmäßig finden in Fulda auch verschiedene
              Veranstaltungen und Märkte statt, wie das beliebte Stadtfest oder
              der traditionelle Weihnachtsmarkt im Dezember.
            </p>{" "}
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-2">
              <Home className="text-emerald-600" size={20} />
              <span>40 m² Wohnfläche</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="text-emerald-600" size={20} />
              <span>Für max. 2 Personen</span>
            </div>
            <div className="flex items-center gap-2">
              <Wifi className="text-emerald-600" size={20} />
              <span>Kostenloses WLAN</span>
            </div>
            <div className="flex items-center gap-2">
              <Car className="text-emerald-600" size={20} />
              <span>Kostenfreie Parkplätze</span>
            </div>
            <div className="flex items-center gap-2">
              <Accessibility className="text-emerald-600" size={20} />
              <span>Nicht behindertengerecht</span>
            </div>
            <div className="flex items-center gap-2">
              <Ban className="text-emerald-600" size={20} />
              <span>Nichtraucherwohnung, keine Haustiere</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
