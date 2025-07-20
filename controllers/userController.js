const User = require('../models/userModel');

exports.getAllDonors = async (req, res) => {
  try {
    const donors = await User.find({ role: 'donor' });
    res.status(200).json(donors);
  } catch (error) {
    console.error('Error fetching donors:', error.message);
    res.status(500).json({ message: 'Failed to fetch donors' });
  }
};
