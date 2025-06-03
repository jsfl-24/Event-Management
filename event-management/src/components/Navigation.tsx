"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-sm bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand with 10px padding */}
          <div className="flex-shrink-0" style={{ padding: "10px" }}>
            <h1 className="text-3xl font-bold text-white-400 tracking-wide">
              Take Down
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="#home"
                className="text-zinc-500 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-300 hover:bg-zinc-900/30"
              >
                Home
              </Link>
              <Link
                href="#events"
                className="text-zinc-500 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-300 hover:bg-zinc-900/30"
              >
                Events
              </Link>
              <Link
                href="#about"
                className="text-zinc-500 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-300 hover:bg-zinc-900/30"
              >
                About
              </Link>
              <Link
                href="#sponsors"
                className="text-zinc-500 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-300 hover:bg-zinc-900/30"
              >
                Sponsors
              </Link>
              <Link
                href="#contact"
                className="text-zinc-500 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-300 hover:bg-zinc-900/30"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden mr-12">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-white-400 p-2 rounded-lg transition duration-300"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/90 backdrop-blur-md rounded-lg mt-2">
              <Link
                href="#home"
                className="text-white hover:text-white-400 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#events"
                className="text-white hover:text-white-400 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Events
              </Link>
              <Link
                href="#about"
                className="text-white hover:text-white-400 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="#sponsors"
                className="text-white hover:text-white-400 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Sponsors
              </Link>
              <Link
                href="#contact"
                className="text-white hover:text-white-400 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
