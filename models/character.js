const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema({
   name: {
      type: String,
      required: true
   },
   initiativeBonus: {
      type: Number,
      required: true
   },
   date: { type: Date, default: Date.now }
});

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;
