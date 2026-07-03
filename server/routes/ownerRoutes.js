const express = require("express");

const router = express.Router();

const {
  addProperty,
  updateProperty,
  deleteProperty,
  myProperties,
} = require("../controllers/ownerController");

const {
  verifyToken,
  verifyOwner,
} = require("../middlewares/authMiddleware");

router.post(
  "/add-property",
  verifyToken,
  verifyOwner,
  addProperty
);

router.put(
  "/update-property/:id",
  verifyToken,
  verifyOwner,
  updateProperty
);

router.delete(
  "/delete-property/:id",
  verifyToken,
  verifyOwner,
  deleteProperty
);

router.get(
  "/my-properties",
  verifyToken,
  verifyOwner,
  myProperties
);

module.exports = router;