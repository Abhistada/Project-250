import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import sequelize from "./config/database.js";

// Import routes
import userRoutes from "./routes/userRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";




dotenv.config();

const app = express();

// ✅ Fix __dirname (for ES Modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// ✅ Serve uploaded images/files statically
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// ✅ Routes
app.use("/api/users", userRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/bookings", bookingRoutes);

// ✅ Default Route
app.get("/", (req, res) => {
  res.send("✅ Ayojon backend running successfully!");
});

// ✅ Server Config
const PORT = process.env.PORT || 5000;

// ✅ Connect to MySQL & Start Server
sequelize
  .authenticate()
  .then(() => {
    console.log("✅ MySQL connected successfully");
    return sequelize.sync({ alter: true }); // auto-sync tables safely
  })
  .then(() => {
    console.log("✅ Database synced successfully");
    app.listen(PORT, () =>
      console.log(`🚀 Server running at http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.error("❌ Database connection error:", err));
