/*
 * @Author: your name
 * @Date: 2020-11-25 10:46:16
 * @LastEditTime: 2021-11-04 16:57:13
 * @LastEditors: GengHH
 * @Description: In User Settings Edit
 * @FilePath: \Gui\ghh-ui\.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true,
    jquery: true,
    // _: true
  },
  // globals: {
  //   _: true
  // },
  extends: [
    'plugin:vue/essential',
    // 'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    //强制使用单引号
    quotes: ['error', 'single'],
    //强制使用分号结尾
    semi: ['error', 'always'],
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
