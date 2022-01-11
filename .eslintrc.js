module.exports = {
  root: true,
  env: {
    node: true,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'prettier/prettier': 'error',
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },

  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/typescript'],
};
