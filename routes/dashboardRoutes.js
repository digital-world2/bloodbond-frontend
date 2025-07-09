const express = require("express");
const router = express.Router();
const { getdashboardStats } = require("../controllers/dashboardStatsController");

router.get("/stats", getdashboardStats);

module.exports = router;
