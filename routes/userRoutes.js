const express = require('express');
const { getAllDonors } = require('../controllers/userController');
const router = express.Router();

// GET /api/donors
router.get('/donors', getAllDonors);

module.exports = router;
