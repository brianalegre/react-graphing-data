// Import Dependencies
const sequelize = require("../config/connection")

// Import Seed
const seedCDM = require('./cdmSeed')

// Start seed
const startSeed = async () => {
    try {
        await sequelize.sync({ force: true })
        console.log('--- DB SYNCED! ---')

        await seedCDM();
        console.log('--- CDM DATA SEEDED! ---')

    } catch (err) {
        console.log(err)
    }
    process.exit(0);
}

startSeed();
