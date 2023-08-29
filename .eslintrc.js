module.exports = {
	extends: ['eslint:recommended', 'next', 'prettier'],
	parserOptions: {
		ecmaVersion: 2021, // Or the appropriate version for your project
		sourceType: 'module',
		ecmaFeatures: {
			JSX: true, // Add this line to enable JSX parsing
		},
	},
	rules: {
		// Add specific ESLint rules if needed
		"no-console": ["error"],
		"import/extensions": "off",
		"react/jsx-filename-extension": 0,
		"import/no-unresolved": 0,
		"react/react-in-jsx-scope": "off",
		"linebreak-style": 0,
		"import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
		"jsx-a11y/click-events-have-key-events": "off",
		"jsx-a11y/no-static-element-interactions": "off",
		"react/style-prop-object": "off",
		"no-confusing-arrow": "off",
		"jsx-a11y/label-has-associated-control": "off",
		"react/destructuring-assignment": "off",
		"react/jsx-props-no-spreading": "off",
		"react/jsx-no-useless-fragment": "off",
		"no-empty": 0,
		"no-unused-vars": 0,
		"no-shadow": 0,
		"no-unused-expressions": 0,
		"react/require-default-props": 0,
		"import/prefer-default-export": 0
	},
}
