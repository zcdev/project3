const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const encounterSchema = new Schema({
   name: {
      type: String,
      required: true
   },
   monsters: {
      type: Array,
      default: []
   },
   date: { type: Date, default: Date.now }
});

const Encounter = mongoose.model("Encounter", encounterSchema);

module.exports = Encounter;
