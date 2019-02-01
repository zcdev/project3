const router = require("express").Router();
const campaignsController = require("../../controllers/campaignsController");

// Matches with "/api/campaigns"
router.route("/")
// .get(campaignsController.findAll) - May not use this because we don't want to find  ALL campaigns. We want all campaigns for logged in user (Like on line 11).
  .post(campaignsController.create);

// Matches with "api/campaigns/:id/encounters"
router.route("/:id/encounters")
  .get(campaignsController.getAllEncounters)
  .post(campaignsController.addEncounter);

// Matches with "/api/campaigns/user/:userName"
router.route("/user/:userName")
  .get(campaignsController.findByUsername)
  .put(campaignsController.update)
  .delete(campaignsController.remove);



module.exports = router;
