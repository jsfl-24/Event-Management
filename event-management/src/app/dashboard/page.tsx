"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute";

interface UserDetails {
  name: string;
  email: string;
  phone: string;
  age: string;
  college: string;
  year: string;
  branch: string;
}

interface Registration {
  eventTitle: string;
  eventDate: string;
  eventTime: string;
  registrationFee: string;
  registeredAt: string;
  [key: string]: any; // For any additional properties
}

export default function Dashboard() {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [registrations, setRegistrations] = useState<Registration[]>([]);

  useEffect(() => {
    const storedDetails = localStorage.getItem("userDetails");
    const storedRegistrations = localStorage.getItem("registrations");

    if (storedDetails) {
      try {
        setUserDetails(JSON.parse(storedDetails));
      } catch (error) {
        console.error("Error parsing user details:", error);
      }
    }

    if (storedRegistrations) {
      try {
        setRegistrations(JSON.parse(storedRegistrations));
      } catch (error) {
        console.error("Error parsing registrations:", error);
        setRegistrations([]);
      }
    }
  }, []);

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-zinc-900 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
            <Link
              href="/"
              className="bg-zinc-600 text-white px-4 py-2 rounded-lg hover:bg-zinc-500 transition duration-300"
            >
              Back to Home
            </Link>
          </div>

          {/* User Details Card */}
          <div className="bg-zinc-800 rounded-lg p-6 mb-8 border border-zinc-700">
            <h2 className="text-xl font-bold text-white mb-4">Profile</h2>
            {userDetails ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-zinc-400">Name:</span>{" "}
                  <span className="text-white">{userDetails.name}</span>
                </div>
                <div>
                  <span className="text-zinc-400">Email:</span>{" "}
                  <span className="text-white">{userDetails.email}</span>
                </div>
                <div>
                  <span className="text-zinc-400">Phone:</span>{" "}
                  <span className="text-white">{userDetails.phone}</span>
                </div>
                <div>
                  <span className="text-zinc-400">Age:</span>{" "}
                  <span className="text-white">{userDetails.age}</span>
                </div>
                <div>
                  <span className="text-zinc-400">College:</span>{" "}
                  <span className="text-white">{userDetails.college}</span>
                </div>
                <div>
                  <span className="text-zinc-400">Year:</span>{" "}
                  <span className="text-white">{userDetails.year}</span>
                </div>
                <div>
                  <span className="text-zinc-400">Branch:</span>{" "}
                  <span className="text-white">{userDetails.branch}</span>
                </div>
              </div>
            ) : (
              <div className="text-zinc-400">Loading profile...</div>
            )}
          </div>

          {/* Registrations */}
          <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
            <h2 className="text-xl font-bold text-white mb-4">
              My Registrations ({registrations.length})
            </h2>
            {registrations.length > 0 ? (
              <div className="space-y-4">
                {registrations.map((reg, index) => (
                  <div key={index} className="bg-zinc-700 p-4 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-white font-semibold">
                          {reg.eventTitle}
                        </h3>
                        <p className="text-zinc-300 text-sm">
                          {reg.eventDate} • {reg.eventTime}
                        </p>
                        <p className="text-green-400 font-medium">
                          {reg.registrationFee}
                        </p>
                      </div>
                      <div className="text-xs text-zinc-400">
                        Registered:{" "}
                        {new Date(reg.registeredAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-zinc-400 mb-4">No registrations yet.</p>
                <Link
                  href="/#events"
                  className="bg-zinc-600 text-white px-6 py-2 rounded-lg hover:bg-zinc-500 transition duration-300"
                >
                  Browse Events
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
