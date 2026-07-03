const express = require("express");
const router = express.Router();

const {
  createBooking,
  myBookings,
  cancelBooking,
} = require("../controllers/bookingController");

const { verifyToken } = require("../middlewares/authMiddleware");

router.post("/create", verifyToken, createBooking);

router.get("/my-bookings", verifyToken, myBookings);

router.delete("/cancel/:id", verifyToken, cancelBooking);

module.exports = router;