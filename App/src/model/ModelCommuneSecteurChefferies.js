module.exports = (sequelize, DataTypes) => {
    const communeSecteurChefferies = sequelize.define('CommuneSecteurChefferies', {
        code: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        designation: DataTypes.STRING,
        codeVille: DataTypes.INTEGER,


    });
    return communeSecteurChefferies;
};