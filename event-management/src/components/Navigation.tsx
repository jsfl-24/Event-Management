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
          <Link href="/" className="text-xl font-bold text-white">
            TakeDown 2.0
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a
              href="#events"
              className="text-white hover:text-gray-300 transition"
            >
              Events
            </a>
            <a
              href="#about"
              className="text-white hover:text-gray-300 transition"
            >
              About
            </a>

            {userDetails ? (
              <>
                <span className="text-zinc-300">
                  Welcome, {userDetails.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="text-white hover:text-gray-300 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-white hover:text-gray-300 transition"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="bg-white text-black px-4 py-2 rounded font-medium hover:bg-gray-200 transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-zinc-800">
            <a
              href="#events"
              className="block py-2 text-white hover:text-gray-300"
            >
              Events
            </a>
            <a
              href="#about"
              className="block py-2 text-white hover:text-gray-300"
            >
              About
            </a>

            {userDetails ? (
              <>
                <span className="block py-2 text-zinc-300">
                  Welcome, {userDetails.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="block py-2 text-white hover:text-gray-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="block py-2 text-white hover:text-gray-300"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="block py-2 text-white hover:text-gray-300"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
