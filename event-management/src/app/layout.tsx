import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import './globals.css';

export const metadata = {
  title: 'TechFest',
  description: 'Official TechFest Website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <nav className="bg-white shadow-md p-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">TechFest</h1>
            <div className="space-x-4">
              <a href="/" className="hover:text-blue-600">Home</a>
              <a href="/events" className="hover:text-blue-600">Events</a>
              <a href="#contact" className="hover:text-blue-600">Contact</a>
            </div>
          </div>
        </nav>
        <main className="max-w-6xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}

