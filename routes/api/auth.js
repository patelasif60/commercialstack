const express = require('express');
const router = express.Router();
const authController = require("../../controllers/api/authController");

router.get('/', authController.index);

module.exports = router;