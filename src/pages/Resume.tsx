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
          <div>
            <h3 className="font-bold">Freelance Webentwicklerin (Fullstack)</h3>
            <p className="italic">11/2024 – aktuell</p>
            <ul className="list-disc list-inside ml-4 mt-1">
              <li>Entwicklung individueller Weblösungen für Kund:innen</li>
              <li>Frontend mit JavaScript, React, HTML, CSS</li>
              <li>Backend mit C#, ASP.NET Core, JS-Technologien</li>
              <li>NoSQL-Datenbanken (MongoDB)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Webentwicklerin – Begis GmbH</h3>
            <p className="italic">09/2023 – 10/2024</p>
            <ul className="list-disc list-inside ml-4 mt-1">
              <li>Orchard CMS, C#, ASP.NET, Razor, JavaScript</li>
              <li>Arbeiten mit modularen Strukturen</li>
              <li>Anpassung von Themes und Vorlagen</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Praktikantin – Helios IT Service GmbH</h3>
            <p className="italic">09/2022 – 05/2023</p>
            <ul className="list-disc list-inside ml-4 mt-1">
              <li>Blazor, Bootstrap, REST-API (Swagger/OpenAPI)</li>
              <li>Entity Framework Core & MS SQL Server</li>
              <li>Git, Azure DevOps (CI/CD), NuGet</li>
              <li>Projekt: KHZG-Fördermittelverwaltung</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-semibold border-b pb-1">Bildung</h2>
        <div className="mt-4 space-y-2 text-sm">
          <div>
            <p className="font-medium">Umschulung zur Fachinformatikerin Anwendungsentwicklung</p>
            <p className="text-gray-600">BCW Bildungswerk der Wirtschaft, 2022–2024</p>
          </div>
          <div>
            <p className="font-medium">Bachelor in Computer Engineering</p>
            <p className="text-gray-600">Islamic Azad University, Iran</p>
          </div>
        </div>
      </section>
    </div>
  );
}
