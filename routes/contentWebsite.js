const express = require("express");
const router = express.Router();
const OverMezelf = require("../model/OverMezelf");
const mongoose = require("mongoose");

// CRUD
router.post("/uitlegEindwerk", (req, res) => {
  const overMezelf = new OverMezelf({
    _id: new mongoose.Types.ObjectId(),
    tagname: req.body.tagName,
    info: req.body.info,
  });

  overMezelf.save().then((result) => {
    console.log(result);
  });

  res.send(201).json({ message: "goed uitgevoerd", createdTag: overMezelf });
});

router.get("/", (req, res) => {
  OverMezelf.find().then((resultaat) => {
    res.json(resultaat);
  });
});

router.get("/byTagName/:tagname", (req, res) => {
  OverMezelf.find({ tagname: req.params.tagname }).then((resultaat) => {
    res.json(resultaat);
  });
});

router.get("/:id", (req, res) => {
  OverMezelf.findById(req.params.id).then((resultaat) => {
    res.json(resultaat);
  });
});

router.put("/uitlegEindwerk/update/:id", (req, res) => {
  OverMezelf.findById(req.params.id).then((result) => {
    result.tagname = "ietsNieuws";
    result.save();
    res.send("updated");
  });
});

router.delete("/uitlegEindwerk/delete/:id", (req, res) => {
  OverMezelf.deleteOne({ _id: req.params.id }).then((result) => {
    res.send(result);
  });
});

module.exports = router;
