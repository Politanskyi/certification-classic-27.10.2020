// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

const fromCWD = require('from-cwd');

// -----------------------------------------------------------------------------
// Project paths
// -----------------------------------------------------------------------------

module.exports = {
	src: {
		js: fromCWD('src/js'),
		sass: fromCWD('src/sass'),
		tpl: fromCWD('src/template'),
		images: fromCWD('src/images'),
		svg: fromCWD('src/svg')
	},
	build: {
		content: fromCWD('/public'),
		publicPath: '/',
		dist: fromCWD('docs/')
	},
	modules: [
		fromCWD('./node_modules/'),
		fromCWD('./src/'),
		fromCWD('./src/js/'),
		fromCWD('./src/sass/')
	]
};
