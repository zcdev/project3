const router = require("express").Router();
const campaignsController = require("../../controllers/campaignsController");

// Matches with "/api/campaigns"
router.route("/")
  .get(campaignsController.findAll)
  .post(campaignsController.create);

// Matches with "/api/campaigns/:userName"
router.route("/:userName")
  .get(campaignsController.findById)
  .put(campaignsController.update)
  .delete(campaignsController.remove);

module.exports = router;
