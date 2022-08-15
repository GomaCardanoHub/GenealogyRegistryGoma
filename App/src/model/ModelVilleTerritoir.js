module.exports = (sequelize, DataTypes) => {
    const villeTerritoirs = sequelize.define('VilleTerritoirs', {
        code: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        designation: DataTypes.STRING,
        codeProvince: DataTypes.INTEGER,
        

    });
    return villeTerritoirs
}