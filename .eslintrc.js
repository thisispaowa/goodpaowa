module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'off',
    'vue/valid-v-for': [
      'error',
      {
        ignoreLocalVueFor: ['index'] // 将 "index" 变量添加到忽略列表中
      }
    ],

    'space-before-function-paren': 0
  }
}
