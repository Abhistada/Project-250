import express from "express";
import { 
  createEvent, 
  deleteEvent, 
  getAllEvents, 
  getEventById, 
  upload 
} from "../controllers/eventController.js";

const router = express.Router();

// 🟢 Get all events
router.get("/", getAllEvents);

// 🔵 Get single event by ID
router.get("/:id", getEventById);

// 🟣 Create new event
router.post(
  "/",
  upload.fields([
    { name: "proof_file", maxCount: 1 },
    { name: "image", maxCount: 1 },
  ]),
  createEvent
);

// 🔴 Delete event by ID
router.delete("/:id", deleteEvent);

export default router;
