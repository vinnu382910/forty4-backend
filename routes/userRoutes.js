// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/userController');

// @route   GET /api/users
// @desc    Retrieve all users
// @access  Public
router.route('/')
  .get(getUsers)
  .post(createUser);

// @route   GET /api/users/:id
// @desc    Retrieve user by ID
// @access  Public
router.route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
