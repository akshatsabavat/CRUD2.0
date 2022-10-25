const express = require("express");
const User = require("../models/userModel");
const userController = require("../controllers/userController");
const router = express.Router();

router.get("/", userController.getAllStudents());
router.post("/", userController.addStudent());

module.exports = router;
