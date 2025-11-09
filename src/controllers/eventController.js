import Event from "../models/Event.js";
import multer from "multer";
import path from "path";

// File upload setup
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
export const upload = multer({ storage });

// ✅ Create new event (Organizer)
export const createEvent = async (req, res) => {
  try {
    const {
      organizer_name,
      organizer_mobile,
      organizer_role,
      title,
      description,
      date,
      time,
      location,
      price,
      registration_deadline,
      event_link,
    } = req.body;

    const proof_file = req.files?.proof_file?.[0]?.filename || null;
    const image = req.files?.image?.[0]?.filename || null;

    const newEvent = await Event.create({
      organizer_name,
      organizer_mobile,
      organizer_role,
      proof_file,
      title,
      description,
      date,
      time,
      location,
      price,
      registration_deadline,
      event_link,
      image,
    });

    res.status(201).json({ message: "✅ Event created successfully!", event: newEvent });
  } catch (error) {
    res.status(500).json({ message: "❌ Failed to create event", error: error.message });
  }
};

// 🔍 Get all events
export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.findAll({ order: [["date", "ASC"]] });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: "❌ Failed to fetch events", error: error.message });
  }
};

// 🔎 Get event by ID
export const getEventById = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findByPk(id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: "❌ Failed to fetch event", error: error.message });
  }
};

// 🗑️ Delete event by ID
export const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Event.destroy({ where: { id } });

    if (!deleted) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.status(200).json({ message: "🗑️ Event deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "❌ Failed to delete event", error: error.message });
  }
};
