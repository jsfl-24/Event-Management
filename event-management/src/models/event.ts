// src/models/Event.ts
import mongoose, { Schema, model, models } from 'mongoose';

const EventSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  slug: {
    type: String,
    unique: true,
    required: true,
  },
});

const Event = models.Event || model('Event', EventSchema);

export default Event;
