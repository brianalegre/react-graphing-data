// Import 
const router = require('express').Router();

// Import API
const cdmAPI = require('./cdmAPI')

// Routers
router.use('/cdmAPI', cdmAPI)


// Export
module.exports = router;