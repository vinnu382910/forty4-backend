// models/User.js
const mongoose = require('mongoose');

const { Schema, model } = mongoose;

/**
 * Address Sub-Schema
 * Defines the structure for address details embedded within the User model.
 */
const addressSchema = new Schema({
  street: { type: String, trim: true },
  city: { type: String, trim: true },
  zipcode: { type: String, trim: true },
  geo: {
    lat: { type: String, trim: true },
    lng: { type: String, trim: true }
  }
}, { _id: false });

/**
 * User Schema
 * Defines the structure and validation rules for user documents.
 */
const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [
      /^\S+@\S+\.\S+$/,
      'Please enter a valid email address'
    ]
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true
  },
  company: {
    type: String,
    trim: true
  },
  address: addressSchema
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

// Export the User model
module.exports = model('User', userSchema);
