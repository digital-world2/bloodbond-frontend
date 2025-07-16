// const bloodRequestModel = require("../models/bloodRequestModel");

// const createBloodRequestController = async (req, res) => {
//   try {
//     console.log("📩 Incoming Request Body:", req.body); // log incoming data

//     const newRequest = new bloodRequestModel(req.body);
//     const savedRequest = await newRequest.save(); // this line is likely failing

//     return res.status(201).send({
//       success: true,
//       message: "Blood request submitted successfully",
//       request: savedRequest
//     });
//   } catch (error) {
//     console.error("❌ Mongoose Validation Error:", error.message);
//     console.error("🪵 Full Error:", error.errors || error); // <== log error details

//     return res.status(500).send({
//       success: false,
//       message: error.message || "Error in submitting blood request",
//       error
//     });
//   }
// };



// module.exports = { createBloodRequestController };




const bloodRequestModel = require("../models/bloodRequestModel");

// POST: create a blood request
const createBloodRequestController = async (req, res) => {
  try {
    console.log("📩 Incoming Request Body:", req.body);

    const newRequest = new bloodRequestModel(req.body);
    const savedRequest = await newRequest.save();

    return res.status(201).send({
      success: true,
      message: "Blood request submitted successfully",
      request: savedRequest
    });
  } catch (error) {
    console.error("❌ Mongoose Validation Error:", error.message);
    console.error("🪵 Full Error:", error.errors || error);

    return res.status(500).send({
      success: false,
      message: error.message || "Error in submitting blood request",
      error
    });
  }
};

// ✅ GET: fetch all blood requests (for admin)
const getAllBloodRequestsController = async (req, res) => {
  try {
    const requests = await bloodRequestModel.find().sort({ createdAt: -1 });

    return res.status(200).send({
      success: true,
      message: "Fetched all blood requests",
      requests
    });
  } catch (error) {
    console.error("❌ Error fetching blood requests:", error.message);

    return res.status(500).send({
      success: false,
      message: "Failed to fetch blood requests",
      error
    });
  }
};

const updateBloodRequestStatusController = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updated = await bloodRequestModel.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updated) {
      return res.status(404).send({
        success: false,
        message: "Request not found"
      });
    }

    res.status(200).send({
      success: true,
      message: "Status updated",
      request: updated
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error updating status",
      error
    });
  }
};


module.exports = {
  createBloodRequestController,
  getAllBloodRequestsController,
  updateBloodRequestStatusController
};

