import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Event from "./Event.js";

const Booking = sequelize.define("Booking", {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING, allowNull: false },
  paymentMethod: { type: DataTypes.STRING, allowNull: false },
  trxId: { type: DataTypes.STRING, allowNull: false },
});

Event.hasMany(Booking, { foreignKey: "eventId" });
Booking.belongsTo(Event, { foreignKey: "eventId" });

export default Booking;
