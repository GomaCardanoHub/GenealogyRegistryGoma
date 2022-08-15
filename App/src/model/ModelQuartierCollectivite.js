module.exports = (sequelize, DataTypes) => {
    const quartierCollectivites = sequelize.define('QuartierCollectivites', {
        code: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        designation: DataTypes.STRING,
        codeCommune: DataTypes.INTEGER,

    });
    return quartierCollectivites
}