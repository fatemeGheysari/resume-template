import React from "react";
export default function Sidebar() {
  return (
    <aside className="bg-blue-900 text-white p-6 space-y-6 rounded-md">
      <div>
        <h1 className="text-2xl font-bold text-center">Anahita Gheysari</h1>
        <p className="text-blue-300 text-center">Webentwicklerin (Fullstack) – C# | ASP.NET Core | JavaScript | MS SQL</p>
      </div>
      <div className="bg-blue-950 px-3 py-1 rounded">
        <h2 className="text-lg font-bold text-center">KONTAKT</h2>
      </div>
      <div>
        <p>📍 Karower Chaussee 169, 13125 Berlin</p>
        <p>📞 015732119905</p>
        <p>📧 Fateme.gheysari8686@gmail.com</p>
        <p>🔗 https://linkedin.com/in/fatemeh-gheysari</p>
        <p>🔗 https://github.com/fatemeGheysari</p>
      </div>
      <div className="bg-blue-950 px-3 py-2 rounded">
        <h2 className="text-lg font-bold text-white uppercase tracking-wide text-center">Skills</h2>
      </div>

      <div className="text-sm text-white space-y-4 mt-3">
        <div>
          <p className="font-semibold">Programmiersprachen:</p>
          <p>C#, JavaScript, PHP, Python, SQL</p>
        </div>

        <div>
          <p className="font-semibold">Frameworks & Tools:</p>
          <p>
            ASP.NET Core, React, Tailwind, jQuery, Blazor, Bootstrap, Orchard CMS, Entity Framework Core,
            MongoDB, MS SQL Server
          </p>
        </div>

        <div>
          <p className="font-semibold">DevOps & Testing:</p>
          <p>
            Git, Github, Jira, Azure DevOps (CI/CD), REST-API (Swagger/OpenAPI), NUnit, FluentValidation
          </p>
        </div>
      </div>
    </aside>
  );
}
