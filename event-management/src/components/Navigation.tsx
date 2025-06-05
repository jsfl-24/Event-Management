"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface UserDetails {
  name: string;
  email: string;
  phone: string;
  [key: string]: any;
}

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const storedDetails = localStorage.getItem("userDetails");
    if (storedDetails) {
      setUserDetails(JSON.parse(storedDetails));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userDetails");
    localStorage.removeItem("registrations");
    setUserDetails(null);
    router.push("/");
  };

  return (
    <nav
      className={`bg-zinc-900/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-zinc-800 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-white hover:text-zinc-300 transition-colors"
          >
            TakeDown 2.0
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation Links */}
            <a
              href="#events"
              className="text-zinc-400 hover:text-white transition-colors duration-200 font-medium"
            >
              Events
            </a>
            <a
              href="#about"
              className="text-zinc-400 hover:text-white transition-colors duration-200 font-medium"
            >
              About
            </a>
            <a
              href="#sponsors"
              className="text-zinc-400 hover:text-white transition-colors duration-200 font-medium"
            >
              Sponsors
            </a>

            {userDetails ? (
              <div className="flex items-center space-x-4">
                {/* Admin Link */}
                <a
                  href="http://127.0.0.1:8000/admin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors duration-200 font-medium"
                >
                  Admin
                </a>

                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="border border-zinc-600 text-zinc-400 hover:text-white hover:border-white px-4 py-2 rounded-lg transition-all duration-200 font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                {/* Login Button */}
                <Link
                  href="/login"
                  className="border border-zinc-600 text-zinc-400 hover:text-white hover:border-white px-4 py-2 rounded-lg transition-all duration-200 font-medium"
                >
                  Login
                </Link>

                {/* Register Button */}
                <Link
                  href="/signup"
                  className="bg-zinc-700 border border-zinc-600 text-zinc-300 hover:bg-white hover:text-zinc-900 hover:border-white px-4 py-2 rounded-lg transition-all duration-200 font-medium"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-zinc-400 hover:text-white transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-zinc-800 bg-zinc-900/98">
            <div className="space-y-2">
              {/* Mobile Navigation Links */}
              <a
                href="#events"
                onClick={() => setIsOpen(false)}
                className="block py-3 px-2 text-zinc-400 hover:text-white transition-colors duration-200 font-medium rounded-lg hover:bg-zinc-800"
              >
                Events
              </a>
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="block py-3 px-2 text-zinc-400 hover:text-white transition-colors duration-200 font-medium rounded-lg hover:bg-zinc-800"
              >
                About
              </a>
              <a
                href="#sponsors"
                onClick={() => setIsOpen(false)}
                className="block py-3 px-2 text-zinc-400 hover:text-white transition-colors duration-200 font-medium rounded-lg hover:bg-zinc-800"
              >
                Sponsors
              </a>

              {userDetails ? (
                <div className="pt-2 border-t border-zinc-700 mt-2">
                  {/* Admin Link */}
                  <a
                    href="http://127.0.0.1:8000/admin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="block py-3 px-2 text-zinc-400 hover:text-white transition-colors duration-200 font-medium rounded-lg hover:bg-zinc-800"
                  >
                    Admin
                  </a>

                  {/* Logout Button */}
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="w-full text-left py-3 px-2 text-zinc-400 hover:text-white transition-colors duration-200 font-medium rounded-lg hover:bg-zinc-800"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="pt-2 border-t border-zinc-700 mt-2 space-y-2">
                  {/* Mobile Login Button */}
                  <Link
                    href="/login"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center border border-zinc-600 text-zinc-400 hover:text-white hover:border-white py-3 rounded-lg transition-all duration-200 font-medium"
                  >
                    Login
                  </Link>

                  {/* Mobile Register Button */}
                  <Link
                    href="/signup"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center bg-zinc-700 border border-zinc-600 text-zinc-300 hover:bg-white hover:text-zinc-900 hover:border-white py-3 rounded-lg transition-all duration-200 font-medium"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
