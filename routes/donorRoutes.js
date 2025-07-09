const express = require('express');
const router = express.Router();
const Donor = require('../models/userModel'); // adjust the path as needed
const { deactivateDonor } = require('../controllers/donorController'); // ⬅️ Import controller function
const authMiddleware = require('../middlewares/authMiddleware');
const { updateDonorProfileController } = require('../controllers/donorController');


// GET all donors
// GET only donor users
router.get('/', async (req, res) => {
  try {
    const donors = await Donor.find({ role: 'donor' }); // or adjust the filter
    res.status(200).json({ success: true, donors });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch donors' });
  }
});

// GET single donor by ID
router.get('/:id', async (req, res) => {
  try {
    const donor = await Donor.findById(req.params.id);
    if (!donor) {
      return res.status(404).json({ success: false, message: 'Donor not found' });
    }
    res.status(200).json({ success: true, donor });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching donor' });
  }
});



router.patch('/verify-toggle/:id', async (req, res) => {
  try {
    const { verified } = req.body;
    const donor = await Donor.findByIdAndUpdate(req.params.id, { verified }, { new: true });
    res.status(200).json({ success: true, donor });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to update status' });
  }
});


router.put('/update-profile', authMiddleware, updateDonorProfileController);

// // PATCH: Deactivate (unverify) donor by ID
// router.patch('/deactivate/:id', deactivateDonor); // ⬅️ Add this line


module.exports = router;
