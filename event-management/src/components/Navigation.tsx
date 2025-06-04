"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
            <Link href="/" className="text-xl font-bold text-white">
              TechFest 2025
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
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
                <Link
                  href="/dashboard"
                  className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Dashboard
                </Link>
                <span className="text-zinc-300 text-sm">
                  Welcome, {userDetails.name?.split(" ")[0] || "User"}!
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-zinc-700 text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-zinc-600 transition duration-300"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  href="/login"
                  className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="bg-zinc-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-zinc-500 transition duration-300"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
