module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // Disable eslint's stupid 'Multi-Word Component Names' stuff.
    'vue/multi-word-component-names': ['error', {
      'ignores': ['default']
    }],
    
    'vue/multi-word-component-names': 'off'
  }
}
