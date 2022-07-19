module.exports = (sequelize, DataTypes) => {
    const CommuneTerritoire = sequelize.define('CommuneTerritoires', {
        code: {
            type: { type: DataTypes.INTEGER },
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,

        },
        designation: { type: DataTypes.STRING, allowNull: false }
    });
    return CommuneTerritoire;
}