const mongoose = require("mongoose");

const aboutMeSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    tagname: String,
    info: String,
  },
  {
    collection: "OverMezelf",
  }
);

module.exports = mongoose.model("OverMezelf", aboutMeSchema);
