module.exports = {
	parser: "@typescript-eslint/parser", // Specifies the ESLint parser
	extends: [
		"plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
		"plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
		"prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
		"plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
	],
	parserOptions: {
		ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
		sourceType: "module", // Allows for the use of imports
		ecmaFeatures: {
			jsx: true, // Allows for the parsing of JSX
		},
	},
	rules: {
		// Enable prettier rules
		"prettier/prettier": "error",
		// Place to specify ESLint rules.
		"@typescript-eslint/interface-name-prefix": [
			"error",
			{ prefixWithI: "always" },
		],
		// Disable prop-types as we use TypeScript for type checking
		"react/prop-types": "off",
		// allow @ts-ignore for testing purposes
		"@typescript-eslint/ban-ts-ignore": "off",
		"@typescript-eslint/explicit-function-return-type": "off",
		// allow "any" as type
		"@typescript-eslint/no-explicit-any": "off",
	},
	settings: {
		react: {
			version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
		},
	},
};
