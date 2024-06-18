const { DataTypes } = require('sequelize');
const sequelize = require('./db.connection');

const PaymentResult = sequelize.define('PaymentResult', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    paymentResult: {
        type: DataTypes.JSON,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = PaymentResult;