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
			}
		}, {
			onDelete: 'cascade'
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Users');
	}
};