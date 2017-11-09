module.exports = {
    'extends': 'airbnb',
    'parser': 'babel-eslint',
    'env': {
        'browser': true,
        'node': true
    },
    'parserOptions': {
        'ecmaVersion': 8,
        'sourceType': 'module',
        'ecmaFeatures': {
            'jsx': true,
            'experimentalObjectRestSpread': true
        },
    },
    'plugins': ['react'],
    'rules': {
        'import/no-extraneous-dependencies': [
            'error', {
                'devDependencies': true
            }
        ],
    }
}
