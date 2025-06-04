"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Check if user is logged in
    const storedDetails = localStorage.getItem("userDetails");
    if (storedDetails) {
      setUserDetails(JSON.parse(storedDetails));
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userDetails");
    setUserDetails(null);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white">
              Take Down 2.0
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/#home"
                className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
              >
                Home
              </Link>
              <Link
                href="/#events"
                className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
              >
                Events
              </Link>
              <Link
                href="/#about"
                className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
              >
                About
              </Link>
              <Link
                href="/#sponsors"
                className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
              >
                Sponsors
              </Link>
            </div>
          </div>

          {/* Login/User Section */}
          <div className="hidden md:flex items-center space-x-4">
            {userDetails ? (
              <div className="flex items-center space-x-3">
                <span className="text-zinc-300 text-sm">
                  Welcome, {userDetails.name?.split(" ")[0]}!
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-zinc-700 text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-zinc-600 transition duration-300"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="bg-zinc-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-zinc-500 transition duration-300"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-zinc-300 hover:text-white p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-zinc-900/95 backdrop-blur-md rounded-lg mt-2">
              <Link
                href="/#home"
                className="text-zinc-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/#events"
                className="text-zinc-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                href="/#about"
                className="text-zinc-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/#sponsors"
                className="text-zinc-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sponsors
              </Link>

              {/* Mobile Login/User Section */}
              <div className="border-t border-zinc-700 pt-3 mt-3">
                {userDetails ? (
                  <div className="space-y-2">
                    <div className="px-3 py-2">
                      <span className="text-zinc-300 text-sm">
                        Welcome, {userDetails.name?.split(" ")[0]}!
                      </span>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left bg-zinc-700 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-zinc-600 transition duration-300"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <Link
                    href="/login"
                    className="bg-zinc-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-zinc-500 transition duration-300 text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
