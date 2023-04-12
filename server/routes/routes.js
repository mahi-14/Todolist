const express = require("express");
const Task = require("../models/models");
const router = express.Router();

//to get all todos
router.get("/", (req, res) => {
  Task.find((err, docs) => {
    if (err) console.log(err);
    res.json(docs);
  });
});

//create todos
router.post("/", (req, res) => {
  const task = new Task(req.body);
  task.save((err, doc) => {
    if (err) console.log(err);
    res.json(doc);
  });
});

//update todo
router.put("/:id", (req, res) => {
  Task.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    req.body,
    {
      new: true,
    },
    (err, doc) => {
      if (err) console.log(err);
      res.json(doc);
    }
  );
});

//delete todo
router.delete("/:id", (req, res) => {
  Task.findByIdAndDelete(req.params.id, (err, doc) => {
    if (err) console.log(err);
    res.json(doc);
  });
});

//is completed todo
router.patch("/:isComplete/:id", (req, res) => {
  Task.findByIdAndUpdate(
    {
      _id: req.params.id,
      isComplete: req.params.isComplete,
    },
    req.body,
    {
      new: true,
    },
    (err, doc) => {
      if (err) console.log(err);
      res.json(doc);
    }
  );
});

module.exports = router;
