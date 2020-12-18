module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: ['plugin:react/recommended', 'airbnb'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        indent: ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-indent': ['error', 4],
        'no-console': 0,
        'no-underscore-dangle': 0,
    },
    overrides: [
        {
            files: ['src/**/*Slice.js'],
            rules: {
                'no-param-reassign': 0,
            },
        },
    ],
};
