'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	class EntityType extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.belongsTo(models.Record, {
				sourceKey: 'entity_type_id',
				foreignKey: 'entity_type_id',
				onDelete: 'cascade'
			});
		}
	}
	RegionType.init({
		entity_type_id: {
			primaryKey: true,
			type: DataTypes.INTEGER,
			allowNull: false
		},
		entity_type: {
			type: DataTypes.STRING,
			allowNull: false,
		}
	}, {
		sequelize,
		modelName: 'RegionType',
	});
	return RegionType;
};