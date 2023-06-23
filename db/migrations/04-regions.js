'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Regions', {
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
			onDelete: 'cascade'
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Users');
	}
};