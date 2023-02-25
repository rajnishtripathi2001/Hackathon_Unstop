const express = require("express");
const router = express.Router();

const User = require("../../models/User.js");

router.get("/test", (req, res) => {
  res.send("user route testing");
});

// @route GET api/users
// @description Get all books
// @access Public
router.get("/", (req, res) => {
  User.find()
    .then((books) => res.json(books))
    .catch((err) => res.status(404).json({ nobooksfound: "No users found" }));
});

// @route GET api/users/:id
// @description Get single book by id
// @access Public
router.get("/:id", (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(book))
    .catch((err) => res.status(404).json({ nobookfound: "No user found" }));
});

// @route GET api/users
// @description add/save book
// @access Public
router.post("/", (req, res) => {
  User.create(req.body)
    .then((user) => res.json({ msg: "user added successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to add this user", message: err })
    );
});

// @route GET api/users/:id
// @description Update book
// @access Public
router.put("/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then((user) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete("/:id", (req, res) => {
  User.findByIdAndRemove(req.params.id, req.body)
    .then((user) => res.json({ mgs: "user entry deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No such a user" }));
});

module.exports = router;
