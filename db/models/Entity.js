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
			this.hasOne(models.Edition, {
				foreignKey: 'start_edition_id',
				sourceKey: 'edition_id',
				onDelete: 'cascade'
			});
			this.hasOne(models.Edition, {
				foreignKey: 'end_edition_id',
				sourceKey: 'edition_id',
				onDelete: 'cascade'
			});
		}
	}
	Entity.init({
		entity_code: {
			type: DataTypes.STRING,
			allowNull: false,
		},	
		entity_name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		start_edition_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: {
					tableName: 'Edition'
				},
				key: 'edition_id'
			}
		},
		end_edition_id: {
			type: DataTypes.INTEGER,
			references: {
				model: {
					tableName: 'Edition'
				},
				key: 'edition_id'
			}
		}
	}, {
		sequelize,
		modelName: 'Entity',
	});
	return Entity;
};