// Import Model and Sequelize
const { Model, DataTypes, INTEGER, BOOLEAN } = require('sequelize');
const sequelize = require('../config/connection');


// Create Model
class CDMResult extends Model { }

// Initialize Model
CDMResult.init(
    {
        // Define Columns
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        Sequential_Read_1MiB_Q8_T1: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        Sequential_Read_1MiB_Q1_T1: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        Sequential_Write_1MiB_Q8_T1: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        Sequential_Write_1MiB_Q1_T1: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        Random_Read_4KiB_Q32_T1: {
            type: DataTypes.DECIMAL(10, 1),
            allowNull: false
        },
        Random_Read_4KiB_Q1_T1: {
            type: DataTypes.DECIMAL(10, 1),
            allowNull: false
        },
        Random_Write_4KiB_Q32_T1: {
            type: DataTypes.DECIMAL(10, 1),
            allowNull: false
        },
        Random_Write_4KiB_Q1_T1: {
            type: DataTypes.DECIMAL(10, 1),
            allowNull: false
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'CDMResult',
    }
)

// Export
module.exports = CDMResult