const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getAllProperties
} = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/properties", getAllProperties);

module.exports = router;