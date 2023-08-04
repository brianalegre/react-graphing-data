// Import CDMResult Model
const { CDMResult } = require('../models')

// CDMResult Data
const cdmResultData = [
    {
        Sequential_Read_1MiB_Q8_T1: 536.657,
        Sequential_Read_1MiB_Q1_T1: 508.189,
        Sequential_Write_1MiB_Q8_T1: 523.848,
        Sequential_Write_1MiB_Q1_T1: 493.650,
        Random_Read_4KiB_Q32_T1: 46768.8,
        Random_Read_4KiB_Q1_T1: 7068.8,
        Random_Write_4KiB_Q32_T1: 35957.0,
        Random_Write_4KiB_Q1_T1: 19809.6,
    },
    {
        Sequential_Read_1MiB_Q8_T1: 536.657,
        Sequential_Read_1MiB_Q1_T1: 508.189,
        Sequential_Write_1MiB_Q8_T1: 523.848,
        Sequential_Write_1MiB_Q1_T1: 493.650,
        Random_Read_4KiB_Q32_T1: 46768.8,
        Random_Read_4KiB_Q1_T1: 7068.8,
        Random_Write_4KiB_Q32_T1: 35957.0,
        Random_Write_4KiB_Q1_T1: 19809.6,
    },
]

// Start Seed
const seedCDM = () => CDMResult.bulkCreate(cdmResultData)

// Export
module.exports = seedCDM