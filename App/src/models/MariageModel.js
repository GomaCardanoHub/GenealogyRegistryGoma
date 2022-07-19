module.exports=(sequelize,DataTypes) => {
    const Mariage = sequelize.define('Mariages',{ 
        code:{
            type: { type:Sequelize.INTEGER},
            allowNull: true,
            autoIncrement: true,
            primaryKey: true,

        },
        lieuMariage: { type:Sequelize.STRING},
        dateMariage: { type:Sequelize.DATEONLY, defaultValue:Sequelize.DataTypes.NOW},
        resudencePrencipal:{ type:Sequelize.STRING},
        resudenceActuel:{ type:Sequelize.STRING},
        ocupation:{ type:Sequelize.STRING},
        regime: { type:Sequelize.STRING},
        dote: { type:Sequelize.STRING},
        codePersonne:{ type:Sequelize.INTEGER},
        codePersonneConjoint:{ type:Sequelize.INTEGER},

    });
    return Mariage;
}