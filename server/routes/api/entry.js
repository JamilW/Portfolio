const router = require("express").Router();
const entryController = require("../../controllers/entryController");

// Matches with "/api/entry"
router.route("/")
  .post(entryController.create);


module.exports = router;