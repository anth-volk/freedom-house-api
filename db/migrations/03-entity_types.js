'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('RegionTypes', {
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
			onDelete: 'cascade'
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Users');
	}
};