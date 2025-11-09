import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
  try {
    const { eventId, name, email, phone, paymentMethod, trxId } = req.body;

    const booking = await Booking.create({
      eventId,
      name,
      email,
      phone,
      paymentMethod,
      trxId,
    });

    res.status(201).json({ message: "✅ Booking confirmed!", booking });
  } catch (error) {
    res.status(500).json({ message: "❌ Booking failed", error: error.message });
  }
};

export const getBookings = async (req, res) => {
  const bookings = await Booking.findAll({ include: "Event" });
  res.json(bookings);
};
