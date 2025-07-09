// const express = require("express");
// const router = express.Router();
// const { createBloodRequestController } = require("../controllers/bloodRequestController");

// router.post("/request-blood", createBloodRequestController);

// module.exports = router;




const express = require("express");
const router = express.Router();
const {
  createBloodRequestController,
  getAllBloodRequestsController,
  updateBloodRequestStatusController
} = require("../controllers/bloodRequestController");

router.post("/request-blood", createBloodRequestController);
router.get("/requests", getAllBloodRequestsController);

// ✅ Update blood request status
router.patch("/update-status/:id", updateBloodRequestStatusController);

module.exports = router;
