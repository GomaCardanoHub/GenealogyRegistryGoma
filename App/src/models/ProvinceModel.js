module.exports = (sequelize, DataTypes) => {
    const Province = db.define('personnes', {
        code: {
            type: { type: DataTypes.INTEGER },
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,


        },
        designation: { type: DataTypes.STRING, allowNull: false },
    });
    return Province;
}
Province.hasMany(CommuneTerritoire, {foreignKey: 'communeTerritoireId'});