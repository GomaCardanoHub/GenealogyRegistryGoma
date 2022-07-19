module.exports = (sequelize, DataTypes) => {
    const QuartieSecteur = db.define('QuartieSecteurs', {
        code: {
            type: { type: Sequelize.INTEGER },
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,

        },
        designation: { type: Sequelize.STRING, allowNull: false }

    });
}

    QuartieSecteur.belongsTo(CommuneTerritoire);
    QuartieSecteur.hasMany(AvenueGroupement, {foreignKey: 'AvenueGroupementId'});