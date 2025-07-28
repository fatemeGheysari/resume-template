import React from "react";
import { ReactNode } from "react";
import Sidebar from "./Sidebar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6 font-sans grid md:grid-cols-3 gap-6">
      <Sidebar />
      <main className="md:col-span-2">{children}</main>
    </div>
  );
}
