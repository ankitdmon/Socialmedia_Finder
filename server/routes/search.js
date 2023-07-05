const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');

router.post('/getSocialMediaAccounts', searchController.getSocialMediaAccounts);

module.exports = router;