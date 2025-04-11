import React from "react";
import HeaderMainMenu from "@/components/HeaderMainMenu";
import Footer from "@/components/Footer";

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen">
      {/* Header Menu */}
      <HeaderMainMenu />

      {/* Add spacing to compensate for fixed header */}
      <div className="pt-24"></div>

      {/* Datenschutz Content */}
      <section className="p-8 lg:py-20 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-emerald-800">
            Datenschutzerklärung
          </h1>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="space-y-8 text-gray-700">
              {/* Content remains the same - section 1 */}
              <section id="datenschutz-ueberblick">
                <h2 className="text-xl font-semibold mb-4 text-emerald-800">
                  1. Datenschutz auf einen Blick
                </h2>
                
                {/* Rest of the content... */}
                <h3 className="text-lg font-medium mt-6 mb-2">
                  Allgemeine Hinweise
                </h3>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick
                  darüber, was mit Ihren personenbezogenen Daten passiert, wenn
                  Sie diese Website besuchen.
                  {/* Rest of paragraph... */}
                </p>

                {/* More sections... */}
              </section>

              {/* Content remains the same - section 2 */}
              <section id="hosting">
                <h2 className="text-xl font-semibold mb-4 text-emerald-800">
                  2. Hosting
                </h2>
                
                {/* Rest of the content... */}
              </section>

              {/* Content remains the same - section 3 */}
              <section id="allgemeine-hinweise">
                <h2 className="text-xl font-semibold mb-4 text-emerald-800">
                  3. Allgemeine Hinweise und Pflichtinformationen
                </h2>
                
                {/* Rest of the content... */}
              </section>

              {/* Content remains the same - section 5 */}
              <section id="plugins-tools">
                <h2 className="text-xl font-semibold mb-4 text-emerald-800">
                  5. Plugins und Tools
                </h2>
                
                {/* Rest of the content... */}
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}