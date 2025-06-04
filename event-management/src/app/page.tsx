"use client";

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import EventsSection from "@/components/EventsSection";
import AboutSection from "@/components/AboutSection";
import SponsorsSection from "@/components/SponsorsSection";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import api from "@/lib/api";
import { useParams } from "next/navigation";

// Add Event interface
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
  created_at: string;
}

export default function Home() {
  // Type the events state properly
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const eventsData = await api.getEvents();
        setEvents(eventsData);
      } catch (error) {
        console.error("Error fetching events:", error);
        setError("Failed to load events");

        // Fallback to localStorage events
        try {
          const fallbackEvents = JSON.parse(
            localStorage.getItem("events") || "[]"
          );
          if (fallbackEvents.length > 0) {
            setEvents(fallbackEvents);
            setError("Using cached events");
          }
        } catch (e) {
          console.error("No fallback events available");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p>Loading events...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <Navigation />
      <HeroSection />
      {error && (
        <div className="bg-yellow-600/20 border border-yellow-600/50 text-yellow-400 px-4 py-3 mx-4 rounded-lg text-sm mb-4">
          {error}
        </div>
      )}
      <EventsSection events={events} />
      <AboutSection />
      <SponsorsSection />
      <Footer />
    </div>
  );
}

export function RegisterPage() {
  const params = useParams();
  const eventId = params.id as string;

  // Registration form component here

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Registration form UI */}
    </div>
  );
}
