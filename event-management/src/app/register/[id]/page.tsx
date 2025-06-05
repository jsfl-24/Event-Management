"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import api from "@/lib/api";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  fee: string;
  fee_amount: number;
  event_type: string;
  day: number;
  is_key_event: boolean;
  max_participants: number;
  registered_count: number;
  spots_left: number;
}

export default function RegisterPage() {
  const params = useParams();
  const router = useRouter();
  const eventId = params.id as string;

  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [registering, setRegistering] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        console.log("=== DEBUG INFO ===");
        console.log("Event ID from URL:", eventId);
        console.log("API Base URL:", "http://localhost:8000/api");
        console.log(
          "Full API URL:",
          `http://localhost:8000/api/events/${eventId}/`
        );

        const eventData = await api.getEvent(eventId);
        console.log("Event data received:", eventData);
        setEvent(eventData);
      } catch (error: any) {
        console.error("=== ERROR INFO ===");
        console.error("Error fetching event:", error);
        console.error("Error message:", error.message);
        setError(`Event not found: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    if (eventId) {
      fetchEvent();
    } else {
      console.error("No event ID provided");
      setError("No event ID provided");
      setLoading(false);
    }
  }, [eventId]);

  const handleRegister = async () => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      router.push(`/login?redirect=/register/${eventId}`);
      return;
    }

    setRegistering(true);
    setError("");

    try {
      const response = await api.registerForEvent(parseInt(eventId), token);
      setSuccess(
        "Registration successful! You will receive a confirmation email shortly."
      );

      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (error: any) {
      setError(error.message || "Registration failed");
    } finally {
      setRegistering(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-900 text-white">
        <Navigation />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
            <p>Loading event details...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-zinc-900 text-white">
        <Navigation />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Event Not Found</h1>
            <p className="text-zinc-400 mb-4">{error}</p>
            <button
              onClick={() => router.push("/")}
              className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200"
            >
              Back to Events
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <Navigation />

      <div className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-zinc-800 rounded-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-4">
                Register for {event.title}
              </h1>
              {event.is_key_event && (
                <span className="bg-white text-black px-3 py-1 rounded text-sm font-semibold">
                  KEY EVENT
                </span>
              )}
            </div>

            <div className="space-y-4 mb-8">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-zinc-400">Date</p>
                  <p className="text-white font-semibold">{event.date}</p>
                </div>
                <div>
                  <p className="text-zinc-400">Time</p>
                  <p className="text-white font-semibold">{event.time}</p>
                </div>
                <div>
                  <p className="text-zinc-400">Fee</p>
                  <p className="text-white font-semibold">{event.fee}</p>
                </div>
                <div>
                  <p className="text-zinc-400">Available Spots</p>
                  <p className="text-white font-semibold">
                    {event.spots_left} left
                  </p>
                </div>
              </div>

              <div>
                <p className="text-zinc-400 mb-2">Description</p>
                <p className="text-white">{event.description}</p>
              </div>
            </div>

            {error && (
              <div className="bg-red-600/20 border border-red-600/50 text-red-400 px-4 py-3 rounded-lg mb-4">
                {error}
              </div>
            )}

            {success && (
              <div className="bg-green-600/20 border border-green-600/50 text-green-400 px-4 py-3 rounded-lg mb-4">
                {success}
              </div>
            )}

            <div className="flex gap-4">
              <button
                onClick={() => router.push("/")}
                className="flex-1 bg-zinc-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-zinc-500 transition duration-300"
              >
                Back to Events
              </button>

              <button
                onClick={handleRegister}
                disabled={registering || event.spots_left <= 0}
                className={`flex-1 py-3 px-6 rounded-lg font-semibold transition duration-300 ${
                  registering || event.spots_left <= 0
                    ? "bg-gray-500 text-gray-300 cursor-not-allowed"
                    : "bg-white text-black hover:bg-gray-200"
                }`}
              >
                {registering
                  ? "Registering..."
                  : event.spots_left <= 0
                  ? "Event Full"
                  : "Register Now"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
