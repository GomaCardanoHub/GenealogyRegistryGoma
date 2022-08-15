module.exports = (sequelize, DataTypes) => {
    const mariage = sequelize.define('Mariages', {
        code: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: true,
        },
        lieuMariage: DataTypes.STRING,
        dateMariage:DataTypes.STRING,
        resudencePrencipal:DataTypes.STRING,
        resudenceActuel:DataTypes.STRING,
        ocupation:DataTypes.STRING,
        regime:DataTypes.STRING,
        dote: DataTypes.STRING,
        codePersonne:DataTypes.INTEGER,
        codePersonneConjoint:DataTypes.INTEGER,
        
    });
    return mariage;
}
