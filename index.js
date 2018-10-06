module.exports = {
    parser: 'babel-eslint',
    extends: [
        'airbnb',
        'prettier',
        'prettier/react',
    ],
    plugins: ['prettier'],
    env: {
        browser: true
    },
    rules: {
        // jsx-a11y
        "jsx-a11y/click-events-have-key-events": 'off',

        // react
        'react/jsx-filename-extension': 'off',
    }
};

