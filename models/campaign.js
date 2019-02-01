const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const campaignSchema = new Schema({
   username: {
      type: String,
      required: true
   },
   encounters: [
      {
         type: Schema.Types.ObjectId,
         ref: "Encounter"
      }
   ],
   players: {
      type: Array,
      default: []
   },
   date: { type: Date, default: Date.now }
});

const Campaign = mongoose.model("Campaign", campaignSchema);

module.exports = Campaign;
