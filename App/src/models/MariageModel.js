module.exports=(sequelize,DataTypes) => {
    const Mariage = sequelize.define('Mariages',{ 
        code:{
            type: { type:DataTypes.INTEGER},
            allowNull: true,
            autoIncrement: true,
            primaryKey: true,

        },
        lieuMariage: { type:DataTypes.STRING},
        dateMariage: { type:DataTypes.DATEONLY, defaultValue:DataTypes.NOW},
        resudencePrencipal:{ type:DataTypes.STRING},
        resudenceActuel:{ type:DataTypes.STRING},
        ocupation:{ type:DataTypes.STRING},
        regime: { type:DataTypes.STRING},
        dote: { type:DataTypes.STRING},
        codePersonne:{ type:DataTypes.INTEGER},
        codePersonneConjoint:{ type:DataTypes.INTEGER},

    });
    return Mariage;
}