module.exports = (sequelize, DataTypes) => {
    const AvenueGroupement = sequelize.define('AvenueGroupements', {
        code: {
            type: { type: DataTypes.INTEGER },
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,

        },
        designation: { type: DataTypes.STRING, allowNull: false }

    });
    return AvenueGroupement;
}  
    AvenueGroupement.belongsTo(CommuneTerritoire);