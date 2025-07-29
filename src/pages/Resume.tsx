import React from "react";

export default function Resume() {
  return (
    <div className="space-y-6">
      <section>
        <p className="leading-relaxed">
          <strong>Computeringenieurin</strong> mit Bachelorabschluss und IHK-Zertifikat als Fachinformatikerin für Anwendungsentwicklung.
          Praxiserfahrung in der Fullstack-Webentwicklung mit C#, ASP.NET Core, JavaScript, React sowie SQL- und NoSQL-Datenbanken.
          Spezialisierung auf gesetzeskonforme Softwarelösungen im Gesundheitswesen (KHZG).
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold border-b border-t pb-1">Berufserfahrung</h2>
        <div className="mt-4 space-y-4 text-sm">
          <div className="flex gap-4 text-sm">
            <div className="w-24 shrink-0 text-gray-600 italic">
              11/24 – aktuell
            </div>
            <div className="space-y-1">
              <h3 className="font-bold">Freelance Webentwicklerin (Fullstack)</h3>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Entwicklung individueller Weblösungen für Kund:innen</li>
                <li>Frontend mit JavaScript, React, TypeScript, HTML, CSS</li>
                <li>Backend mit C#, ASP.NET Core, JS-Technologien</li>
                <li>MS SQL, NoSQL-Datenbanken (MongoDB)</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="flex gap-4 text-sm">
              <div className="w-24 shrink-0 text-gray-600 italic">
                09/23 – 10/24
              </div>
              <div className="space-y-1">
                <h3 className="font-bold">Webentwicklerin – Begis GmbH</h3>
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>Orchard CMS, C#, ASP.NET, Razor, JavaScript</li>
                  <li>Arbeiten mit modularen Strukturen</li>
                  <li>Anpassung von Themes und Vorlagen</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex gap-4 text-sm">
            <div className="w-24 shrink-0 text-gray-600 italic">
              09/22 – 05/23
            </div>
            <div className="space-y-1">
              <h3 className="font-bold">Praktikantin – Helios IT Service GmbH</h3>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Blazor, Bootstrap, REST-API (Swagger/OpenAPI)</li>
                <li>Entity Framework Core & MS SQL Server</li>
                <li>Git, Azure DevOps (CI/CD), NuGet</li>
                <li>Projekt: KHZG-Fördermittelverwaltung</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-semibold border-b border-t pb-1">Vorgestellte Projekte</h2>
        <div className="mt-4 space-y-4 text-sm">
          <div className="flex gap-4 text-sm">
            <div className="space-y-1">
              <h3 className="font-bold">Full-Stack-Software zur Projekt- und Finanzdaten Verwaltung im rahmen der digitaliesirung von krankenhäusen (KHZG)</h3>
              <div className="mt-2 ml-6 space-y-1 text-sm">
                <div className="grid grid-cols-[90px_1fr] gap-x-2">
                  <span className="font-semibold">Rolle:</span>
                  <span>Full-Stack Entwicklerin (Frontend & Backend)</span>
                </div>
                <div className="grid grid-cols-[90px_1fr] gap-x-2">
                  <span className="font-semibold">Zeitraum:</span>
                  <span>Während der Ausbildung</span>
                </div>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Eigenständige Entwicklung einer Webanwendung zur Verwaltung von Krankenhausprojekten nach den Anforderungen des Krankenhauszukunftsgesetzes (KHZG)</li>
                <li>Umsetzung einer Import- und Prüf-Logik für Finanzdaten aus Excel, inklusive Validierung, Business-Logik und Plausibilitätsprüfung</li>
                <li>Gestaltung eines intuitiven Frontends sowie Entwicklung der Backend-Architektur mit strukturierter SQL-Datenbankanbindung</li>
                <li>Enge Zusammenarbeit mit medizinischen Fachkräften und Ausbildern zur Sicherstellung von Praxisbezug und Gesetzeskonformität</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-6">
        <h2 className="text-xl font-semibold border-b border-t pb-1">Ausbildung in Deutschland</h2>
        <div className="mt-4 space-y-4 text-sm">
          <div className="flex gap-4">
            <div className="w-28 shrink-0 text-gray-600 italic">07/21 – 07/23</div>
            <div>
              <p className="font-medium">Umschulung zur Fachinformatikerin für Anwendungsentwicklung mit IHK-Abschluss</p>
              <p className="text-gray-700 italic">BBQ GmbH Berlin</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-28 shrink-0 text-gray-600 italic">10/19 – 08/20</div>
            <div>
              <p className="font-medium">C1 und B2 Deutschkurs mit B2 telc Zertifikat</p>
              <p className="text-gray-700 italic">IQ-Wissen Berlin Pankow, Deutschland</p>
            </div>
          </div>

        </div>
      </section>
      <section>
        <h2 className="text-xl font-semibold border-b border-t pb-1">Weitere Berufserfahrung</h2>
        <div className="mt-4 space-y-4 text-sm">
          <div className="flex gap-4 text-sm">
            <div className="w-24 shrink-0 text-gray-600 italic">
              07/14 – 12/17
            </div>
            <div className="space-y-1">
              <h3 className="font-bold">Sprachschule Nobough-Zaban, Isfahan (Iran)</h3>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Sprachdozentin für Englisch als Fremdsprache</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="flex gap-4 text-sm">
              <div className="w-24 shrink-0 text-gray-600 italic">
                07/08 – 12/14
              </div>
              <div className="space-y-1">
                <h3 className="font-bold">Pars Institute, Ahwaz (Iran)</h3>
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>IT-Dozentin für Computergrundlagen, Office, und Netzwerke</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-semibold border-b border-t pb-1">Ehrenamtliche Tätigkeiten</h2>
        <div className="mt-4 space-y-4 text-sm">
          <div className="flex gap-4 text-sm">
            <div className="w-24 shrink-0 text-gray-600 italic">
              08/18 – aktuell
            </div>
            <div className="space-y-1">
              <h3 className="font-bold">Schöneberg Hilft e.V., Berlin</h3>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Unterstützung von Familien & Kindern in Berlin, Organisation von Aktivitäten </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="flex gap-4 text-sm">
              <div className="w-24 shrink-0 text-gray-600 italic">
                02/25 – aktuell
              </div>
              <div className="space-y-1">
                <h3 className="font-bold">Need4Deed, Berlin</h3>
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>Ehrenamtliche Dolmetscherin (Farsi-Deutsch) für geflüchtete Personen</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-6">
        <h2 className="text-xl font-semibold border-b border-t pb-1">Studium im Iran</h2>
        <div className="mt-4 space-y-4 text-sm">
          <div className="flex gap-4">
            <div className="w-28 shrink-0 text-gray-600 italic">10/14 – 07/17</div>
            <div>
              <p className="font-medium">Übersetzerstudium (Englisch/Persisch) mit Bachelor Abschluss</p>
              <p className="text-gray-700 italic">Sheikh-Bahaei-Universität Isfahan, Iran	</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-28 shrink-0 text-gray-600 italic">10/04 – 07/08</div>
            <div>
              <p className="font-medium">Informatikstudium mit dem Schwerpunkt Softwareentwicklung und Bachelorabschluss sowie Anerkennung in Deutschland</p>
              <p className="text-gray-700 italic">Islamic Azad Universität</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
