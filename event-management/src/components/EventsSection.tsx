"use client";

import { useState } from "react";
import Link from "next/link";

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

interface EventsSectionProps {
  events: Event[];
}

export default function EventsSection({ events }: EventsSectionProps) {
  const [selectedDay, setSelectedDay] = useState(1);

  // Filter events by selected day
  const filteredEvents = events.filter((event) => event.day === selectedDay);
  const keyEvents = filteredEvents.filter((event) => event.is_key_event);
  const otherEvents = filteredEvents.filter((event) => !event.is_key_event);

  if (events.length === 0) {
    return (
      <section className="py-20 px-4 bg-zinc-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Loading Events...
          </h2>
          <p className="text-zinc-400">Please wait while we load the events.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="events" className="py-20 px-4 bg-zinc-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Event Schedule</h2>
          <p className="text-zinc-400 text-lg">
            Two days packed with exciting competitions and workshops
          </p>
        </div>

        {/* Day Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-zinc-700 rounded-lg p-1 flex">
            <button
              onClick={() => setSelectedDay(1)}
              className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                selectedDay === 1
                  ? "bg-white text-black"
                  : "text-zinc-300 hover:text-white"
              }`}
            >
              Day 1 - June 5
            </button>
            <button
              onClick={() => setSelectedDay(2)}
              className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                selectedDay === 2
                  ? "bg-white text-black"
                  : "text-zinc-300 hover:text-white"
              }`}
            >
              Day 2 - June 6
            </button>
          </div>
        </div>

        {/* Key Events */}
        {keyEvents.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Key Events
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyEvents.map((event) => (
                <EventCard key={event.id} event={event} isKeyEvent={true} />
              ))}
            </div>
          </div>
        )}

        {/* Other Events */}
        {otherEvents.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Other Events
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherEvents.map((event) => (
                <EventCard key={event.id} event={event} isKeyEvent={false} />
              ))}
            </div>
          </div>
        )}

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-zinc-400 text-lg">
              No events scheduled for Day {selectedDay}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function EventCard({
  event,
  isKeyEvent,
}: {
  event: Event;
  isKeyEvent: boolean;
}) {
  return (
    <div
      className={`bg-zinc-700 rounded-lg p-6 hover:bg-zinc-600 transition-colors border-l-4 ${
        isKeyEvent ? "border-red-500" : "border-green-500"
      }`}
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <h4 className="text-xl font-semibold text-white mb-2">
            {event.title}
          </h4>
          <p className="text-zinc-300 text-sm mb-2">{event.description}</p>
        </div>
        {isKeyEvent && (
          <span className="bg-white text-black px-2 py-1 rounded text-xs font-semibold">
            KEY EVENT
          </span>
        )}
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex items-center text-zinc-400">
          <span className="mr-2">Date:</span>
          <span>{event.date}</span>
        </div>
        <div className="flex items-center text-zinc-400">
          <span className="mr-2">Time:</span>
          <span>{event.time}</span>
        </div>
        <div className="flex items-center text-zinc-400">
          <span className="mr-2">Fee:</span>
          <span>{event.fee}</span>
        </div>
        <div className="flex items-center text-zinc-400">
          <span className="mr-2">Spots:</span>
          <span>{event.spots_left} spots left</span>
        </div>
      </div>

      <Link href={`/register/${event.id}`}>
        <button className="w-full mt-4 bg-white text-black py-2 px-4 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">
          Register Now
        </button>
      </Link>
    </div>
  );
}
