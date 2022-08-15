module.exports = (sequelize, DataTypes) => {
    const avenueGroupements = sequelize.define('AvenueGroupements', {
        code: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        designation: DataTypes.STRING,
        codeQuartier: DataTypes.INTEGER,

    });
    return avenueGroupements
}