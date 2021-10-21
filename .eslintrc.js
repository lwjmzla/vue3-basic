module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // vue rules
    'vue/script-indent': ['error', 2, {
      'baseIndent': 0,
      'switchCase': 1,
      'ignores': []
    }],
    'vue/html-indent': ['error', 2, {
      'attribute': 1,
      'closeBracket': 0,
      'alignAttributesVertically': false,
      'ignores': []
    }],
    'vue/html-closing-bracket-spacing': ['error', {
      'selfClosingTag': 'never'
    }],
    'vue/max-attributes-per-line': ['error', {
      'singleline': 1,
      'multiline': {
        // 'max': 10,
        'allowFirstLine': true
      }
    }],
    'vue/singleline-html-element-content-newline': 0,
    'vue/no-unused-components': 0,
    'vue/html-self-closing': 0,
    // js rules
    'space-before-function-paren': ['error', {
      'anonymous': 'always',
      'named': 'never',
      'asyncArrow': 'ignore'
    }],
    'indent': ['error', 2, {
      'SwitchCase': 1
    }],
    'semi': ['error', 'always'],
    "space-infix-ops": ["error", {"int32Hint": false}],
    "object-curly-spacing": ["error", "always"],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "@typescript-eslint/no-explicit-any": ["off"]
  },
  'overrides': [
    {
      'files': ['*.vue'],
      'rules': {
        'indent': 'off',
        'no-trailing-spaces': 'off',
        'no-unused-expressions': 'off',
        'vue/max-attributes-per-line': 0, // !关闭 Attribute "ref" should be on a new line
        'vue/html-closing-bracket-newline': 0,
        'vue/multiline-html-element-content-newline': 0,
        'vue/attribute-hyphenation': 0,
        'vue/prop-name-casing': 0, // !取消prop驼峰校验
      }
    }
  ]
}
