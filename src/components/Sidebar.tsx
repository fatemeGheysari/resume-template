import React from "react";
export default function Sidebar() {
  return (
    <aside className="bg-blue-900 text-white p-6 space-y-6 rounded-md">
      <div>
        <h1 className="text-2xl font-bold">Anahita Gheysari</h1>
        <p className="text-blue-300">Fullstack Webentwicklerin</p>
      </div>
      <div>
        <p>📍 Karower Chaussee 169, 13125 Berlin</p>
        <p>📞 015732119905</p>
        <p>📧 Fateme.gheysari8686@gmail.com</p>
        <p>🔗 linkedin.com/in/fatemeh-gheysari</p>
      </div>
      <div>
        <h2 className="font-semibold text-lg border-b border-blue-700 pb-1 mb-2">Fähigkeiten</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>C#, ASP.NET Core, Entity Framework</li>
          <li>SQL, PostgreSQL, MongoDB</li>
          <li>React, JavaScript, TypeScript</li>
          <li>Tailwind CSS, Bootstrap</li>
          <li>Git, Azure DevOps</li>
        </ul>
      </div>
    </aside>
  );
}
