'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Entities', {
			entity_code: {
				allowNull: false,
				unique: true,
				primaryKey: true,
				type: Sequelize.STRING
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
				allowNull: false,
				references: {
					model: {
						tableName: 'Edition'
					},
					key: 'edition_id'
				}
			}
		}, {
			onDelete: 'cascade'
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Users');
	}
};