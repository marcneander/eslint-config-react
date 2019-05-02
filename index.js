module.exports = {
    parser: 'babel-eslint',
    extends: [
        'airbnb',
        'prettier',
        'prettier/react',
    ],
    plugins: ['prettier', 'react-hooks'],
    env: {
        browser: true
    },
    rules: {
        // react
        'react/jsx-filename-extension': 'off',
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",

        // prettier
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                trailingComma: 'none',
                tabWidth: 4,
                printWidth: 120
            }
        ]
    }
};

