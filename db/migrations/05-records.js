'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Records', {
			entity_code: {
				primaryKey: true,
				type: DataTypes.STRING,
				allowNull: false,
				references: {
					model: {
						tableName: 'Entity'
					},
					key: 'entity_code'
				}
			},	
			region_code: {
				type: DataTypes.STRING,
				references: {
					model: {
						tableName: 'Region'
					},
					key: 'region_code'
				}
			},
			region_type: {
				type: DataTypes.STRING,
				references: {
					model: {
						tableName: 'RegionType'
					},
					key: 'region_type'
				}
			},
			edition_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: {
						tableName: 'Edition'
					},
					key: 'edition_id'
				}
			},
			status: {
				type: DataTypes.STRING,
				allowNull: false
			},
			pr_rating: {
				type: DataTypes.DECIMAL(1,1),
				allowNull: false
			},
			cl_rating: {
				type: DataTypes.DECIMAL(1,1),
				allowNull: false
			},
			a1: {
				type: DataTypes.INTEGER,
			},
			a2: {
				type: DataTypes.INTEGER,
			},
			a3: {
				type: DataTypes.INTEGER,
			},
			a_cum: {
				type: DataTypes.INTEGER,
			},
			b1: {
				type: DataTypes.INTEGER,
			},
			b2: {
				type: DataTypes.INTEGER,
			},
			b3: {
				type: DataTypes.INTEGER,
			},
			b4: {
				type: DataTypes.INTEGER,
			},
			b_cum: {
				type: DataTypes.INTEGER,
			},
			c1: {
				type: DataTypes.INTEGER,
			},
			c2: {
				type: DataTypes.INTEGER,
			},
			c3: {
				type: DataTypes.INTEGER,
			},
			c_cum: {
				type: DataTypes.INTEGER,
			},
			add_a: {
				type: DataTypes.INTEGER,
			},
			add_b: {
				type: DataTypes.INTEGER,
			},
			add_q: {
				type: DataTypes.INTEGER,
			},
			pr_cum: {
				type: DataTypes.INTEGER,
			},
			d1: {
				type: DataTypes.INTEGER,
			},
			d2: {
				type: DataTypes.INTEGER,
			},
			d3: {
				type: DataTypes.INTEGER,
			},
			d4: {
				type: DataTypes.INTEGER,
			},
			d_cum: {
				type: DataTypes.INTEGER,
			},
			e1: {
				type: DataTypes.INTEGER,
			},
			e2: {
				type: DataTypes.INTEGER,
			},
			e3: {
				type: DataTypes.INTEGER,
			},
			e_cum: {
				type: DataTypes.INTEGER,
			},
			f1: {
				type: DataTypes.INTEGER,
			},
			f2: {
				type: DataTypes.INTEGER,
			},
			f3: {
				type: DataTypes.INTEGER,
			},
			f4: {
				type: DataTypes.INTEGER,
			},
			f_cum: {
				type: DataTypes.INTEGER,
			},
			g1: {
				type: DataTypes.INTEGER,
			},
			g2: {
				type: DataTypes.INTEGER,
			},
			g3: {
				type: DataTypes.INTEGER,
			},
			g4: {
				type: DataTypes.INTEGER,
			},
			g_cum: {
				type: DataTypes.INTEGER,
			},
			cl_cum: {
				type: DataTypes.INTEGER,
			},
			cat_cum: {
				type: DataTypes.INTEGER,
			}
		}, {
			onDelete: 'cascade'
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Users');
	}
};