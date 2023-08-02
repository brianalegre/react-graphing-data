// Import Router, Model
const router = require('express').Router();
const { CDMResult } = require('../../models');

// Get all Results
// Endpoint /api/cdmAPI
router.get('/', async (req, res) => {
    try {
        // Query
        const getAllCDMResults = await CDMResult.findAll({
            include: [{ all: true, nested: true }],
        })

        // Return Data
        res.status(200).json(getAllCDMResults)
    } catch (err) {
        res.status(400).json('*** getAllCDMResults *** - Something went wrong', err);
    }
})

// Export
module.exports = router;