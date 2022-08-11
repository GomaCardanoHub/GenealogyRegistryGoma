module.exports = (sequelize, DataTypes) => {
    const QuartieSecteur = sequelize.define('QuartieSecteurs', {
        code: {
            type: { type: DataTypes.INTEGER },
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,

        },
        designation: { type: DataTypes.STRING, allowNull: false }

    });
}

   // QuartieSecteur.belongsTo(CommuneTerritoire);
   // QuartieSecteur.hasMany(AvenueGroupement, {foreignKey: 'AvenueGroupementId'});