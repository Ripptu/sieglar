import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Datenschutz() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#111111] text-gray-300">
      <Helmet>
        <title>Datenschutz - Bühnengesellschaft Sieglar</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <Navbar />
      
      <main className="flex-grow pt-32 pb-24 px-6 max-w-4xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-12">Datenschutzerklärung</h1>
        <div className="space-y-8 text-sm md:text-base leading-relaxed text-gray-400">
          <p className="text-lg text-gray-300">Die nachfolgende Datenschutzerklärung gilt für die Nutzung der Webseite www.buehnengesellschaft.de (nachfolgend „Website“).</p>
          <p>Wir messen dem Datenschutz große Bedeutung bei. Die Erhebung und Verarbeitung Ihrer personenbezogenen Daten geschieht unter Beachtung der geltenden datenschutzrechtlichen Vorschriften, insbesondere der EU-Datenschutzgrundverordnung (DSGVO). Wir erheben und verarbeiten Ihre personenbezogenen Daten, um Ihnen das oben genannten Portal anbieten zu können. Diese Erklärung beschreibt, wie und zu welchem Zweck Ihre Daten erfasst und genutzt werden und welche Wahlmöglichkeiten Sie im Zusammenhang mit persönlichen Daten haben. Durch Ihre Verwendung dieser Website stimmen Sie der Erfassung, Nutzung und Übertragung Ihrer Daten gemäß dieser Datenschutzerklärung zu.</p>

          <div>
            <h2 className="text-2xl font-serif text-white mb-4 mt-12 border-b border-[#333] pb-2">1 Verantwortliche Stelle</h2>
            <p className="mb-4">Verantwortliche Stelle für die Erhebung, Verarbeitung und Nutzung Ihrer personenbezogenen Daten im Sinne der DSGVO ist:</p>
            <div className="bg-[#1a1a1a] p-6 border border-[#222]">
              <p className="mb-1">Vereinsname: Bühnengesellschaft Sieglar – Die Volksbühne 1919/62 e.V.</p>
              <p className="mb-1">Anschrift: Reichensteinstr. 91 K</p>
              <p className="mb-1">PLZ/Ort: 53844 Troisdorf</p>
              <p className="mb-1">Tel: 02241/2002108</p>
              <p>Vorsitzender: Christian Schäfer</p>
            </div>
            <p className="mt-4">Sofern Sie der Erhebung, Verarbeitung oder Nutzung Ihrer Daten durch uns nach Maßgabe dieser Datenschutzbestimmungen insgesamt oder für einzelne Maßnahmen widersprechen wollen, können Sie Ihren Widerspruch an oben genannte verantwortliche Stelle richten. Sie können diese Datenschutzerklärung jederzeit speichern und ausdrucken.</p>
          </div>
          
          <div>
            <h2 className="text-2xl font-serif text-white mb-4 mt-12 border-b border-[#333] pb-2">2 Allgemeine Nutzung der Webseite</h2>
            
            <h3 className="text-lg font-medium text-gray-200 mt-6 mb-2">2.1 Zugriffsdaten</h3>
            <p>Wir sammeln Informationen über Sie, wenn Sie diese Webseite nutzen. Wir erfassen automatisch Informationen über Ihr Nutzungsverhalten und Ihre Interaktion mit uns und registrieren Daten zu Ihrem Computer oder Mobilgerät. Wir erheben, speichern und nutzen Daten über jeden Zugriff auf unser Onlineangebot (sogenannte Serverlogfiles). Zu den Zugriffsdaten gehören Name und URL der abgerufenen Datei, Datum und Uhrzeit des Abrufs, übertragene Datenmenge, Meldung über erfolgreichen Abruf (HTTP response code), Browsertyp und Browserversion, Betriebssystem, Referrer URL (d.h. die zuvor besuchte Seite), IP-Adresse und der anfragende Provider...</p>
            
            <h3 className="text-lg font-medium text-gray-200 mt-6 mb-2">2.2 E-Mail Kontakt</h3>
            <p>Wenn Sie mit uns in Kontakt treten (z.B. per Kontaktformular oder E-Mail), speichern wir Ihre Angaben zur Bearbeitung der Anfrage sowie für den Fall, dass Anschlussfragen entstehen. Weitere personenbezogene Daten speichern und nutzen wir nur, wenn Sie dazu einwilligen oder dies ohne besondere Einwilligung gesetzlich zulässig ist.</p>
            
            <h3 className="text-lg font-medium text-gray-200 mt-6 mb-2">2.3 Google Analytics</h3>
            <p>Wir benutzen Google Analytics, einen Webanalysedienst der Google Inc. („Google“). Google Analytics verwendet sog. „Cookies“, Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen...</p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-white mb-4 mt-12 border-b border-[#333] pb-2">3 Ihre Rechte als von der Datenverarbeitung Betroffener</h2>
            <p>Nach den anwendbaren Gesetzen haben Sie verschiedene Rechte bezüglich ihrer personenbezogenen Daten:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>3.1 Recht auf Bestätigung und Auskunft</li>
              <li>3.2 Recht auf Berichtigung</li>
              <li>3.3 Recht auf Löschung („Recht auf Vergessenwerden“)</li>
              <li>3.4 Recht auf Einschränkung der Verarbeitung</li>
              <li>3.5 Recht auf Datenübertragbarkeit</li>
              <li>3.6 Widerspruchsrecht</li>
              <li>3.7 Automatisierte Entscheidungen einschließlich Profiling</li>
              <li>3.8 Recht auf Widerruf einer datenschutzrechtlichen Einwilligung</li>
              <li>3.9 Recht auf Beschwerde bei einer Aufsichtsbehörde</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-serif text-white mb-4 mt-12 border-b border-[#333] pb-2">4 Datensicherheit</h2>
            <p>Wir sind um die Sicherheit Ihrer Daten im Rahmen der geltenden Datenschutzgesetze und technischen Möglichkeiten maximal bemüht. Ihre persönlichen Daten werden bei uns verschlüsselt übertragen. Dies gilt auch für Ihre Bestellungen. Wir nutzen das Codierungssystems SSL (Secure Socket Layer)...</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
