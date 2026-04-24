import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Impressum() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#111111] text-gray-300">
      <Helmet>
        <title>Impressum - Bühnengesellschaft Sieglar</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <Navbar />
      
      <main className="flex-grow pt-32 pb-24 px-6 max-w-4xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-12">Impressum</h1>
        <div className="space-y-8 text-sm md:text-base leading-relaxed text-gray-400">
          
          <div className="bg-[#1a1a1a] p-8 border border-[#222]">
            <h2 className="text-xl font-serif text-white mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="mb-1">Bühnengesellschaft Sieglar – Die Volksbühne 1919/62 e.V.</p>
            <p className="mb-1">Inhaltlich Verantwortlicher gemäß § 5 des Telemediengesetz (TMG):</p>
            <p className="mb-1">Christian Schäfer</p>
            <p className="mb-1">Josef-Frank-Str. 20</p>
            <p>53842 Troisdorf</p>
          </div>
          
          <div>
            <h2 className="text-2xl font-serif text-white mb-6 mt-12 border-b border-[#333] pb-2">Haftungsausschluss</h2>
            
            <h3 className="text-lg font-medium text-gray-200 mt-6 mb-2">Inhalt des Onlineangebotes</h3>
            <p>Die Bühnengesellschaft Sieglar – Die Volksbühne 1919/62 e.V. übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität der bereitgestellten Informationen. Haftungsansprüche gegen das Webteam, welche sich auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden, sind grundsätzlich ausgeschlossen, sofern seitens des Webteams kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt. Alle Angebote sind freibleibend und unverbindlich. Die Bühnengesellschaft behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.</p>
            
            <h3 className="text-lg font-medium text-gray-200 mt-6 mb-2">Verweise und Links</h3>
            <p>Bei direkten oder indirekten Verweisen auf fremde Webseiten (Hyperlinks), die außerhalb des Verantwortungsbereiches des Webteams liegen, würde eine Haftungsverpflichtung ausschließlich in dem Fall in Kraft treten, in dem das Webteam von den Inhalten Kenntnis hat und es ihm technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern. Das Webteam erklärt hiermit ausdrücklich, dass zum Zeitpunkt der Linksetzung keine illegalen Inhalte auf den zu verlinkenden Seiten erkennbar waren. Auf die aktuelle und zukünftige Gestaltung, die Inhalte oder die Urheberschaft der verlinkten/verknüpften Seiten hat die Hochschule keinerlei Einfluss. Deshalb distanziert er sich hiermit ausdrücklich von allen Inhalten aller verlinkten /verknüpften Seiten, die nach der Linksetzung verändert wurden. Diese Feststellung gilt für alle innerhalb des eigenen Internetangebotes gesetzten Links und Verweise sowie für Fremdeinträge in vom Webteam eingerichteten Gästebüchern, Diskussionsforen, Linkverzeichnissen, Mailinglisten und in allen anderen Formen von Datenbanken, auf deren Inhalt externe Schreibzugriffe möglich sind. Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für Schäden, die aus der Nutzung oder Nichtnutzung solcherart dargebotener Informationen entstehen, haftet allein der Anbieter der Seite, auf welche verwiesen wurde, nicht derjenige, der über Links auf die jeweilige Veröffentlichung lediglich verweist. Rechtswirksamkeit dieses Haftungsausschlusses Dieser Haftungsausschluss ist als Teil des Internetangebotes zu betrachten, von dem aus auf diese Seite verwiesen wurde. Sofern Teile oder einzelne Formulierungen dieses Textes der geltenden Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen sollten, bleiben die übrigen Teile des Dokumentes in ihrem Inhalt und ihrer Gültigkeit davon unberührt. Der vorliegende Haftungssauschlusstext basiert auf dem kostenlosen Dienst von http://www.disclaimer.de</p>

            <h3 className="text-lg font-medium text-gray-200 mt-6 mb-2">Urheber- und Kennzeichenrecht</h3>
            <p className="mb-4">Die Bühnengesellschaft Sieglar ist bestrebt, in allen Publikationen die Urheberrechte der verwendeten Grafiken, Tondokumente, Videosequenzen und Texte zu beachten, von ihm selbst erstellte Grafiken, Tondokumente, Videosequenzen und Texte zu nutzen oder auf lizenzfreie Grafiken, Tondokumente, Videosequenzen und Texte zurückzugreifen.</p>
            <p className="mb-4">Alle innerhalb des Internetangebotes genannten und ggf. durch Dritte geschützten Marken- und Warenzeichen unterliegen uneingeschränkt den Bestimmungen des jeweils gültigen Kennzeichenrechts und den Besitzrechten der jeweiligen eingetragenen Eigentümer. Allein aufgrund der bloßen Nennung ist nicht der Schluss zu ziehen, dass Markenzeichen nicht durch Rechte Dritter geschützt sind.</p>
            <p>Das Copyright für veröffentlichte, von Mitgliedern der Bühnengesellschaft selbst erstellte Objekte bleibt allein beim Autor der Seiten. Eine Vervielfältigung oder Verwendung solcher Grafiken, Tondokumente, Videosequenzen und Texte in anderen elektronischen oder gedruckten Publikationen ist ohne ausdrückliche Zustimmung der Bühnengesellschaft Sieglar nicht gestattet.</p>

            <h3 className="text-lg font-medium text-gray-200 mt-6 mb-2">Datenschutzerklärung (Auszug)</h3>
            <p>Der Schutz Ihrer personenbezogenen Daten bei deren Erhebung, Verarbeitung und Nutzung anlässlich Ihres Besuchs auf unserer Homepage ist der Bühnengesellschaft Sieglar ein wichtiges Anliegen. Ihre Daten werden im Rahmen der datenschutzrechtlichen Vorschriften geschützt... (siehe vollständige Datenschutzerklärung).</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
