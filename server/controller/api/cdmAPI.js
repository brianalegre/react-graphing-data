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

        // Catch Errors
    } catch (err) {
        res.status(400).json('*** getAllCDMResults *** - Something went wrong', err);
    }
})

// Get Single Result
// Endpoint /api/cdmAPI/:id
router.get('/:id', async (req, res) => {
    try {
        // Query
        const getSingleCDMResult = await CDMResult.findByPk(req.params.id, {
        })

        // If CDMResult not found
        if (!getSingleCDMResult) {
            res.status(404).json({ message: '*** getSingleCDMResult *** - No CDMResult found with that ID' })
        }

        // Return Data
        res.status(200).json(getSingleCDMResult)

        // Catch Errors
    } catch (err) {
        res.status(400).json('*** getSingleCDMResult *** - Something went wrong', err)
    }
})

// Delete Single Result
// Endpoint /api/cdmAPI/:id
router.delete('/:id', async (req, res) => {
    try {
        // Delete
        const deleteCDMResult = await CDMResult.destroy({
            where: { id: req.params.id },
        })
        // If CDMResult not found
        if (!deleteCDMResult) {
            res.status(404).json({ message: '*** deleteCDMResult *** - No CDMResult found with that ID' })
        }

        // Response
        res.status(200).json('*** deleteCDMResult *** - Result deleted')

        // Catch Errors
    } catch (err) {
        res.status(400).json('*** deleteCDMResult *** - Something went wrong', err)
    }
})

// Add New Result
router.post('/', async (req, res) => {
    try {
        // Add Result
        const addCDMResult = await CDMResult.create({
            Sequential_Read_1MiB_Q8_T1: req.body.Sequential_Read_1MiB_Q8_T1,
            Sequential_Read_1MiB_Q1_T1: req.body.Sequential_Read_1MiB_Q1_T1,
            Sequential_Write_1MiB_Q8_T1: req.body.Sequential_Write_1MiB_Q8_T1,
            Sequential_Write_1MiB_Q1_T1: req.body.Sequential_Write_1MiB_Q1_T1,
            Random_Read_4KiB_Q32_T1: req.body.Random_Read_4KiB_Q32_T1,
            Random_Read_4KiB_Q1_T1: req.body.Random_Read_4KiB_Q1_T1,
            Random_Write_4KiB_Q32_T1: req.body.Random_Write_4KiB_Q32_T1,
            Random_Write_4KiB_Q1_T1: req.body.Random_Write_4KiB_Q1_T1,
        })

        // Response
        res.status(200).json('*** addCDMResult *** - Results added')

        // Catch Errors
    } catch (err) {
        res.status(400).json('*** addCDMResult *** - Something went wrong', err)
    }

})


// Export
module.exports = router;