import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ImpressumPage() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <Header />

      {/* Impressum Content */}
      <section className="p-8 lg:py-20 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-emerald-800">
            Impressum
          </h1>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="space-y-6">
              <div>
                <p className="text-lg">Kerstin Witzel</p>
                <p>Fatimastraße 21</p>
                <p>36124 Eichenzell</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3 text-emerald-800">
                  Kontakt
                </h2>
                <div className="space-y-2">
                  <p>E-Mail: info@ferienwohnunglandliebe.de</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
