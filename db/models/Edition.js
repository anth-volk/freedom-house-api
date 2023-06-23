'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	class Edition extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.belongsTo(models.Record, {
				sourceKey: 'edition_id',
				foreignKey: 'edition_id',
				onDelete: 'cascade'
			});
			this.belongsTo(models.Edition, {
				foreignKey: 'start_edition_id',
				sourceKey: 'edition_id',
				onDelete: 'cascade'
			});
			this.belongsTo(models.Edition, {
				foreignKey: 'end_edition_id',
				sourceKey: 'edition_id',
				onDelete: 'cascade'
			});
		}
	}
	Edition.init({
		edition_id: {
			primaryKey: true,
			type: DataTypes.INTEGER,
			allowNull: false,
		},	
		edition_desc: {
			type: DataTypes.STRING,
			allowNull: false
		},
	}, {
		sequelize,
		modelName: 'Edition',
	});
	return Edition;
};