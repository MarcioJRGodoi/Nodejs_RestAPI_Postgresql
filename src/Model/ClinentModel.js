const DataTypes  = require('sequelize');
const sequelize = require('../db/db');
module.exports = () => {
    return sequelize.define('Client', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        login: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6,16]
            }
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    });
};