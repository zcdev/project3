const router = require("express").Router();
const campaignRoutes = require("./campaigns");

// Book routes
router.use("/campaigns", campaignRoutes);

module.exports = router;