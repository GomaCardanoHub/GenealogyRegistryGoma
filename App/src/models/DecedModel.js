

module.export = (sequelize, DataTypes) => {
    const Deced = sequelize.define('Deceds', {
        code: {
            type: { type: DataTypes.INTEGER },
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,

        },
        lieuDeced: { type: DataTypes.STRING },
        dateDeced: { type: DataTypes.DATEONLY },
        resudencePrencipal: { type: DataTypes.STRING },
        resudenceActuel: { type: DataTypes.STRING },
        occupation: { type: DataTypes.STRING },
        motifDeced: { type: DataTypes.STRING },
        codePersonne: { type: DataTypes.INTEGER },
    });
    return Deced;
}