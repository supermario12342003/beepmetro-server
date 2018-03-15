var i18nConfig = {
	defaultLocale: 'en',
	locales:['en', 'fr'],
	directory: __dirname + '/locales',
	// sets a custom cookie name to parse locale settings from - defaults to NULL
	cookie: 'serverLanguage',
	// query parameter to switch locale (ie. /home?lang=ch) - defaults to NULL
	queryParameter: 'lang',
};

module.exports = {i18nConfig}