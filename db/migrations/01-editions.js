'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Editions', {
			edition_id: {
				primaryKey: true,
				type: DataTypes.INTEGER,
				allowNull: false,
			},	
			edition_desc: {
				type: DataTypes.STRING,
				allowNull: false
			},
			period_under_review: {
				type: DataTypes.STRING
			}
		}, {
			onDelete: 'cascade'
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Users');
	}
};