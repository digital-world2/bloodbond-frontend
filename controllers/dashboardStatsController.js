// const userModel = require("../models/userModel");
// const bloodRequestModel = require("../models/bloodRequestModel");

// const getdashboardStats = async (req, res) => {
//   try {
//     const totalDonors = await userModel.countDocuments({ role: "donor" });
//     const totalRequests = await bloodRequestModel.countDocuments();
//     const fulfilledRequests = await bloodRequestModel.countDocuments({ status: "Fulfilled" });

//     res.status(200).send({
//       success: true,
//       message: "Dashboard stats fetched successfully",
//       stats: {
//         totalDonors,
//         totalRequests,
//         fulfilledRequests,
//       },
//     });
//   } catch (error) {
//     console.error("Error fetching dashboard stats:", error);
//     res.status(500).send({
//       success: false,
//       message: "Error fetching dashboard stats",
//       error,
//     });
//   }
// };

// module.exports = { getdashboardStats };






const userModel = require("../models/userModel");
const bloodRequestModel = require("../models/bloodRequestModel");

const getdashboardStats = async (req, res) => {
  try {
    const totalDonors = await userModel.countDocuments({ role: "donor" });
    const totalRequests = await bloodRequestModel.countDocuments();
    const fulfilledRequests = await bloodRequestModel.countDocuments({ status: "Fulfilled" });

    // Group donors by blood group
    const donorsByBloodGroup = await userModel.aggregate([
      { $match: { role: "donor" } },
      {
        $group: {
          _id: "$bloodGroup",
          count: { $sum: 1 }
        }
      }
    ]);

    res.status(200).send({
      success: true,
      message: "Dashboard stats fetched successfully",
      stats: {
        totalDonors,
        totalRequests,
        fulfilledRequests,
        donorsByBloodGroup
      },
    });
  } catch (error) {
    console.error("Error fetching dashboard stats:", error);
    res.status(500).send({
      success: false,
      message: "Error fetching dashboard stats",
      error,
    });
  }
};

module.exports = { getdashboardStats };
