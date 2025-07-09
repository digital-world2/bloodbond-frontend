const Donor = require('../models/userModel'); // adjust path as needed

const deactivateDonor = async (req, res) => {
  try {
    const { id } = req.params;
    await Donor.findByIdAndUpdate(id, { verified: false });
    res.status(200).json({ success: true, message: 'Donor marked as unverified' });
  } catch (error) {
    console.error('Error deactivating donor:', error);
    res.status(500).json({ success: false, message: 'Failed to deactivate donor' });
  }
};


const updateDonorProfileController = async (req, res) => {
  // try {
  //   const userId = req.body.userId;

  //   const updatedUser = await Donor.findByIdAndUpdate(
  //     userId,
  //     {
  //       email: req.body.email,
  //       phonenumber: req.body.phonenumber,
  //       bloodGroup: req.body.bloodGroup,
  //       address: req.body.address,
  //       role: req.body.role,
  //     },
  //     { new: true }
  //   );

  //   if (!updatedUser) {
  //     return res.status(404).json({ success: false, message: "User not found" });
  //   }

  //   res.status(200).json({ success: true, message: "Profile updated", user: updatedUser });
  // } catch (error) {
  //   console.error("Error updating profile:", error);
  //   res.status(500).json({ success: false, message: "Server error" });
  // }
   try {
    const userId = req.body.userId;

    const updateData = {
      email: req.body.email,
      phonenumber: req.body.phonenumber,
      bloodGroup: req.body.bloodGroup,
      address: req.body.address,
      role: req.body.role,
      available: req.body.available, // add this line
    };

    if (req.file) {
      updateData.bloodReportImage = req.file.filename;
    }

    const updatedDonor = await Donor.findByIdAndUpdate(userId, updateData, { new: true });

    res.status(200).json({ success: true, donor: updatedDonor });
  } catch (error) {
    console.error("Error updating donor:", error);
    res.status(500).json({ success: false, message: 'Failed to update donor profile' });
  }
};

module.exports = {
  deactivateDonor,
  updateDonorProfileController
};
