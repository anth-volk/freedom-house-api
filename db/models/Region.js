'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	class Region extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.belongsTo(models.Record, {
				sourceKey: 'region_id',
				foreignKey: 'region_id',
				onDelete: 'cascade'
			});
		}
	}
	Region.init({
		region_id: {
			primaryKey: true,
			type: DataTypes.INTEGER,
			allowNull: false,
		},	
		region_name: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		sequelize,
		modelName: 'Region',
	});
	return Region;
};