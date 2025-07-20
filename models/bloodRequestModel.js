// const mongoose = require('mongoose');

// const bloodRequestSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   bloodGroup: {
//     type: String,
//     required: true,
//     enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
//   },
//   neededTime: {
//     type: String,
//     required: true
//   },
//   location: {
//     type: String,
//     required: true
//   },
//   quantity: {
//     type: String,
//     required: true
//   },
//   contact: {
//     type: String,
//     required: true
//   },
// }, { timestamps: true });

// module.exports = mongoose.model("bloodRequests", bloodRequestSchema);






const mongoose = require('mongoose');

const bloodRequestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  bloodGroup: {
    type: String,
    required: true,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
  },
  neededTime: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  quantity: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'Fulfilled'],
    default: 'Pending'
  }
}, { timestamps: true });

module.exports = mongoose.model("bloodRequests", bloodRequestSchema);
