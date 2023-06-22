'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	class RegionType extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.belongsTo(models.Record, {
				sourceKey: 'region_type',
				foreignKey: 'region_type',
				onDelete: 'cascade'
			});
		}
	}
	RegionType.init({
		region_type: {
			type: DataTypes.STRING,
			allowNull: false,
		}
	}, {
		sequelize,
		modelName: 'RegionType',
	});
	return RegionType;
};