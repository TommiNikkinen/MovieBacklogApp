const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @desc    Register new user
// @route   POST /api/users
// @access  Public

const registerUser = (req, res) => {
  res.status(200).json({ message: "Register user" });
};

// @desc    Authenticate  user
// @route   POST /api/users/login
// @access  Public
const loginUser = (req, res) => {
  res.status(200).json({ message: "Login user" });
};

// @desc    Get user data
// @route   GET /api/users/me
// @access  Public
const getUser = (req, res) => {
  res.status(200).json({ message: "User data display" });
};

// @desc    Register new user
// @route   POST /api/users
// @access  Public

module.exports = {
  registerUser,
  loginUser,
  getUser,
};
