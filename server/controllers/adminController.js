const User = require("../models/UserSchema");
const Booking = require("../models/BookingSchema");
const Property = require("../models/PropertySchema");

// Get All Users
exports.getAllUsers = async (req, res) => {

  const users = await User.find();

  res.json(users);

};

// Get All Bookings
exports.getAllBookings = async (req, res) => {

  const bookings = await Booking.find();

  res.json(bookings);

};

// Get All Properties
exports.getAllProperties = async (req, res) => {

  const properties = await Property.find();

  res.json(properties);

};

// Delete User
exports.deleteUser = async (req, res) => {

  await User.findByIdAndDelete(req.params.id);

  res.json({
    message: "User Deleted",
  });

};

// Delete Property
exports.deleteProperty = async (req, res) => {

  await Property.findByIdAndDelete(req.params.id);

  res.json({
    message: "Property Deleted",
  });

};
