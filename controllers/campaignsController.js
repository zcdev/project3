const db = require("../models");

// All methods subject to change
module.exports = {
  findAll: function (req, res) {
    db.Campaign
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByUsername: function (req, res) {
    db.Campaign
      .findOne({ username: req.params.userName })
      .then(dbCampaign => res.json(dbCampaign))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log("Controller req.body: ", req.body);
    db.Campaign
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Campaign
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Campaign
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getAllEncounters: function (req, res) {
    db.Campaign
      .findOne({ _id: req.params.id })
      .populate("encounters")
      .then(dbCampaign => res.json(dbCampaign.encounters))
      .catch(err => res.status(422).json(err));
      console.log(res);
  },
  addEncounter: function (req, res) {
    db.Encounter
      .create(req.body)
      .then(dbEncounter => {
        return db.Campaign.findOneAndUpdate({ _id: req.params.id }, { $push: { encounters: dbEncounter._id } }, { new: true });
      })
      .then(dbCampaign => res.json(dbCampaign))
      .catch(err => res.status(422).json(err));
  }
};

