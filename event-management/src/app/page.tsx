"use client";

import Navigation from "@/components/Navigation";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import { useEffect, useState } from "react";
import api from "@/lib/api";

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
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsData = await api.getEvents();
        setEvents(eventsData);
      } catch (error) {
        // Fallback sample events
        const fallbackEvents: Event[] = [
          {
            id: 1,
            title: "AI/ML Workshop",
            description:
              "Hands-on workshop covering machine learning fundamentals",
            date: "2025-06-05",
            time: "10:00 AM - 4:00 PM",
            fee: "₹299",
            fee_amount: 299,
            event_type: "technical",
            day: 1,
            is_key_event: true,
            max_participants: 50,
            registered_count: 12,
            spots_left: 38,
            created_at: new Date().toISOString(),
          },
          {
            id: 2,
            title: "24-Hour Hackathon",
            description: "Non-stop coding marathon with prizes",
            date: "2025-06-06",
            time: "24 Hours",
            fee: "₹499",
            fee_amount: 499,
            event_type: "technical",
            day: 2,
            is_key_event: true,
            max_participants: 100,
            registered_count: 25,
            spots_left: 75,
            created_at: new Date().toISOString(),
          },
          {
            id: 3,
            title: "Web Development Workshop",
            description: "Learn React, Node.js, and databases",
            date: "2025-06-05",
            time: "2:00 PM - 6:00 PM",
            fee: "₹179",
            fee_amount: 179,
            event_type: "technical",
            day: 1,
            is_key_event: false,
            max_participants: 60,
            registered_count: 15,
            spots_left: 45,
            created_at: new Date().toISOString(),
          },
        ];
        setEvents(fallbackEvents);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <Navigation />
      <HeroSection />
      <EventsSection events={events} />
      <AboutSection />
      <Footer />
    </div>
  );
}
