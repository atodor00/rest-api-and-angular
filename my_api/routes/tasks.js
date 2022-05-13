const express = require("express");
const router = express.Router();
const Task = require("../models/Tasks");

//get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Task.find(); //spremi u db  promise se vrati
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const task = new Task({
    text: req.body.text,
    day: req.body.day,
    reminder: req.body.reminder,
  });
  try {
    const saveTask = await task.save(); //spremi u db  promise se vrati
    res.json(saveTask);
  } catch (err) {
    res.json({ message: err });
  }
});

// router.get("/:id", async (req, res) => {
//   const id = req.params.id;

//   try {
//     const post = await Post.findById(id); //spremi u db  promise se vrati
//     res.json(post);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const removed_task = await Task.remove({ _id: id }); //spremi u db  promise se vrati
    res.json(removed_task);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const updatedTaskById = await Task.updateOne(
      { _id: req.params.id },
      { $set: { reminder: req.body.reminder } }
    );

    res.json(updatedTaskById);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
