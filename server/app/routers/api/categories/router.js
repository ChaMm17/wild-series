const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

/* Here you code */

const { browse, read } = require("../../../controllers/categoryActions");

// Route to get a list of categories
router.get("/", browse);

// Route to get one category
router.get("/:id", read); // Complete path is: /api/programs/:id

/* ************************************************************************* */

module.exports = router;
