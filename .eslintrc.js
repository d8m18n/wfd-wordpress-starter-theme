module.exports = {
	env: {
		browser: true,
		es2020: true,
	},
	extends: [
		'plugin:@wordpress/eslint-plugin/recommended',
		'plugin:react/recommended',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 11,
		sourceType: 'module',
	},
	plugins: [ 'react' ],
	rules: {
		'no-console': 'off',
	},
};
