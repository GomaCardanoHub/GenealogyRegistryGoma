module.exports = (sequelize, DataTypes) => {
    const deced = sequelize.define('Deceds', {
        code: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: true,
        },
        lieuDeced: DataTypes.STRING ,
        dateDeced: DataTypes.DATEONLY ,
        resudencePrencipal: DataTypes.STRING ,
        resudenceActuel: DataTypes.STRING,
        occupation: DataTypes.STRING ,
        motifDeced: DataTypes.STRING ,
        codePersonne:  DataTypes.INTEGER ,
    });
    return deced;
}
