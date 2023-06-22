'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
	await queryInterface.bulkInsert('Entities', [
		{entity_code: 'AD', entity_name: 'Andorra'},
		{entity_code: 'AE', entity_name: 'United Arab Emirates'},
		{entity_code: 'AF', entity_name: 'Afghanistan'},
		{entity_code: 'AG', entity_name: 'Antigua and Barbuda'},
		{entity_code: 'AI', entity_name: 'Anguilla'},
		{entity_code: 'AL', entity_name: 'Albania'},
		{entity_code: 'AM', entity_name: 'Armenia'},
		{entity_code: 'AO', entity_name: 'Angola'},
		{entity_code: 'AQ', entity_name: 'Antarctica'},
		{entity_code: 'AR', entity_name: 'Argentina'},
		{entity_code: 'AS', entity_name: 'American Samoa'},
		{entity_code: 'AT', entity_name: 'Austria'},
		{entity_code: 'AU', entity_name: 'Australia'},
		{entity_code: 'AW', entity_name: 'Aruba'},
		{entity_code: 'AX', entity_name: 'Åland Islands'},
		{entity_code: 'AZ', entity_name: 'Azerbaijan'},
		{entity_code: 'BA', entity_name: 'Bosnia and Herzegovina'},
		{entity_code: 'BB', entity_name: 'Barbados'},
		{entity_code: 'BD', entity_name: 'Bangladesh'},
		{entity_code: 'BE', entity_name: 'Belgium'},
		{entity_code: 'BF', entity_name: 'Burkina Faso'},
		{entity_code: 'BG', entity_name: 'Bulgaria'},
		{entity_code: 'BH', entity_name: 'Bahrain'},
		{entity_code: 'BI', entity_name: 'Burundi'},
		{entity_code: 'BJ', entity_name: 'Benin'},
		{entity_code: 'BL', entity_name: 'Saint Barthélemy'},
		{entity_code: 'BM', entity_name: 'Bermuda'},
		{entity_code: 'BN', entity_name: 'Brunei Darussalam'},
		{entity_code: 'BO', entity_name: 'Bolivia (Plurinational State of)'},
		{entity_code: 'BQ', entity_name: 'Bonaire, Sint Eustatius and Saba'},
		{entity_code: 'BR', entity_name: 'Brazil'},
		{entity_code: 'BS', entity_name: 'Bahamas'},
		{entity_code: 'BT', entity_name: 'Bhutan'},
		{entity_code: 'BV', entity_name: 'Bouvet Island'},
		{entity_code: 'BW', entity_name: 'Botswana'},
		{entity_code: 'BY', entity_name: 'Belarus'},
		{entity_code: 'BZ', entity_name: 'Belize'},
		{entity_code: 'CA', entity_name: 'Canada'},
		{entity_code: 'CC', entity_name: 'Cocos (Keeling) Islands'},
		{entity_code: 'CD', entity_name: 'Congo, Democratic Republic of the'},
		{entity_code: 'CF', entity_name: 'Central African Republic'},
		{entity_code: 'CG', entity_name: 'Congo'},
		{entity_code: 'CH', entity_name: 'Switzerland'},
		{entity_code: 'CI', entity_name: 'Côte d\'Ivoire'},
		{entity_code: 'CK', entity_name: 'Cook Islands'},
		{entity_code: 'CL', entity_name: 'Chile'},
		{entity_code: 'CM', entity_name: 'Cameroon'},
		{entity_code: 'CN', entity_name: 'China'},
		{entity_code: 'CO', entity_name: 'Colombia'},
		{entity_code: 'CR', entity_name: 'Costa Rica'},
		{entity_code: 'CU', entity_name: 'Cuba'},
		{entity_code: 'CV', entity_name: 'Cabo Verde'},
		{entity_code: 'CW', entity_name: 'Curaçao'},
		{entity_code: 'CX', entity_name: 'Christmas Island'},
		{entity_code: 'CY', entity_name: 'Cyprus'},
		{entity_code: 'CZ', entity_name: 'Czechia'},
		{entity_code: 'DE', entity_name: 'Germany'},
		{entity_code: 'DJ', entity_name: 'Djibouti'},
		{entity_code: 'DK', entity_name: 'Denmark'},
		{entity_code: 'DM', entity_name: 'Dominica'},
		{entity_code: 'DO', entity_name: 'Dominican Republic'},
		{entity_code: 'DZ', entity_name: 'Algeria'},
		{entity_code: 'EC', entity_name: 'Ecuador'},
		{entity_code: 'EE', entity_name: 'Estonia'},
		{entity_code: 'EG', entity_name: 'Egypt'},
		{entity_code: 'EH', entity_name: 'Western Sahara'},
		{entity_code: 'ER', entity_name: 'Eritrea'},
		{entity_code: 'ES', entity_name: 'Spain'},
		{entity_code: 'ET', entity_name: 'Ethiopia'},
		{entity_code: 'FI', entity_name: 'Finland'},
		{entity_code: 'FJ', entity_name: 'Fiji'},
		{entity_code: 'FK', entity_name: 'Falkland Islands (Malvinas)'},
		{entity_code: 'FM', entity_name: 'Micronesia (Federated States of)'},
		{entity_code: 'FO', entity_name: 'Faroe Islands'},
		{entity_code: 'FR', entity_name: 'France'},
	])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
