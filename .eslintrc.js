module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	globals: {
		$: true
	},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 12
	},
	extends: ['@stripped-ui']
};
