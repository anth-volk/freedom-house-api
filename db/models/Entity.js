'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	class Entity extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.belongsTo(models.Record, {
				sourceKey: 'entity_code',
				foreignKey: 'entity_code',
				onDelete: 'cascade'
			});
		}
	}
	Entity.init({
		entity_code: {
			primaryKey: true,
			type: DataTypes.STRING,
			allowNull: false,
		},	
		entity_name: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		sequelize,
		modelName: 'Entity',
	});
	return Entity;
};