// src/lib/registeredEvents.ts
// src/app/lib/registeredEvents.ts
import connectToDB from './mongodb';
import Event from '../../models/Event';
import User from '../../models/User';

export default async function getRegisteredEvents(email: string) {
  await connectToDB();

  const user = await User.findOne({ email }).populate('registeredEvents');

  if (!user || !user.registeredEvents) return [];

  return user.registeredEvents.map((event: any) => ({
    _id: event._id.toString(),
    name: event.name,
    date: event.date,
    slug: event.slug,
  }));
}
