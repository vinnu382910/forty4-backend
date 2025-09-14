// controllers/userController.js
const User = require('../models/userModel');

/**
 * @desc    Get all users
 * @route   GET /api/users
 * @access  Public
 */
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      count: users.length,
      data: users
    });
  } catch (error) {
    console.error('Error fetching users:', error.message);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

/**
 * @desc    Get user by ID
 * @route   GET /api/users/:id
 * @access  Public
 */
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.status(200).json({
      success: true,
      data: user // ✅ directly sending user object
    });
  } catch (error) {
    console.error('Error fetching user:', error.message);
    res.status(400).json({
      success: false,
      message: 'Invalid user ID'
    });
  }
};


/**
 * @desc    Create new user
 * @route   POST /api/users
 * @access  Public
 */
const createUser = async (req, res) => {
  const { name, email, phone, company, address } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({
      success: false,
      message: 'Name, email and phone are required'
    });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: 'Email already exists'
      });
    }

    const user = await User.create({
      name,
      email,
      phone,
      company,
      address
    });

    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: user
    });
  } catch (error) {
    console.error('Error creating user:', error.message);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

/**
 * @desc    Update user by ID
 * @route   PUT /api/users/:id
 * @access  Public
 */
const updateUser = async (req, res) => {
  const { name, email, phone, company, address } = req.body;

  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    // Update only fields that are provided
    user.name = name || user.name;
    user.email = email || user.email;
    user.phone = phone || user.phone;
    user.company = company || user.company;
    user.address = address || user.address;

    const updatedUser = await user.save();

    res.status(200).json({
      success: true,
      message: 'User updated successfully',
      data: updatedUser
    });
  } catch (error) {
    console.error('Error updating user:', error.message);
    res.status(400).json({
      success: false,
      message: 'Invalid user ID or data'
    });
  }
};

/**
 * @desc    Delete user by ID
 * @route   DELETE /api/users/:id
 * @access  Public
 */
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'User removed successfully'
    });
  } catch (error) {
    console.error('Error deleting user:', error.message);
    res.status(400).json({
      success: false,
      message: 'Invalid user ID'
    });
  }
};


module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
