module.exports = {
    "env": {
        "codeceptjs/codeceptjs": true,
        "es2021": true
    },
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
        "codeceptjs/no-exclusive-tests": 2,
        "codeceptjs/no-pause-in-scenario": 2
    },
    "plugins": [
        "codeceptjs"
    ],
    "extends": ["plugin:codeceptjs/recommended"]
};
