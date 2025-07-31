import React from "react";
export default function Sidebar() {
  return (
    <aside className="bg-stone-300 text-gray-800 p-6 space-y-6 rounded-md">
      <div>
        <h1 className="text-2xl font-bold text-center">Anahita Gheysari</h1>
        <img
          src={`${import.meta.env.BASE_URL}bewerbungsFoto.jpeg`}
          alt="Profilbild"
          className="w-32 h-37 object-cover mx-auto my-3 border-2 shadow-md"
        />

        <p className="text-gray-800 text-center">Webentwicklerin (Fullstack) – C# | ASP.NET Core | JavaScript | MS SQL</p>
      </div>
      <div className="bg-gray-800 px-3 py-1 rounded">
        <h2 className="text-lg font-bold text-white text-center">KONTAKT</h2>
      </div>
      <div className="flex flex-col space-y-2 text-sm mt-4">
        <p>📍 Karower Chaussee 169, 13125 Berlin</p>
        <p>📞 015732119905</p>
        <p>📧 fateme.gheysari8686@gmail.com</p>
        <p>🔗 <a href="https://linkedin.com/in/fatemeh-gheysari" className="text-blue-600 underline">LinkedIn</a></p>
        <p>🔗 <a href="https://github.com/fatemeGheysari" className="text-blue-600 underline">GitHub</a></p>
      </div>
      <div className="bg-gray-800 px-3 py-1 rounded">
        <h2 className="text-lg font-bold text-white text-center">SKILLS</h2>
      </div>

      <div className="text-sm text-gray-800 space-y-4 mt-3">
        <div>
          <p className="font-bold">Programmiersprachen:</p>
          <p>C#, JavaScript, PHP, Python, SQL</p>
        </div>

        <div>
          <p className="font-bold">Frameworks & Tools:</p>
          <p>
            ASP.NET Core, React, Tailwind, jQuery, Blazor, Bootstrap, Orchard CMS, Entity Framework Core,
            MongoDB, MS SQL Server
          </p>
        </div>

        <div>
          <p className="font-bold">DevOps & Testing:</p>
          <p>
            Git, Github, Jira, Azure DevOps (CI/CD), REST-API (Swagger/OpenAPI), NUnit, FluentValidation
          </p>
        </div>
      </div>

      <div className="bg-gray-800 px-3 py-1 rounded">
        <h2 className="text-lg font-bold text-white text-center">SPRACHEN</h2>
      </div>

      <div className="text-sm text-gray-800 space-y-4 mt-3">
        <div>
          <p className="font-semibold text-center">Persisch – Muttersprache</p>
        </div>
        <div>
          <p className="font-semibold text-center">Deutsch – verhandlungssicher</p>
        </div>
        <div>
          <p className="font-semibold text-center">Englisch – gut in Wort und Schrift</p>
        </div>
      </div>
    </aside>
  );
}
