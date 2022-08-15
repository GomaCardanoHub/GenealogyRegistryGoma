module.exports = (sequelize, DataTypes) => {
    const provinces = sequelize.define('Provinces', {
        code: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        designation: DataTypes.STRING,

    });
    return provinces
}