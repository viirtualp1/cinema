module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'vue/no-v-html': ['off'],
    'vue/multi-word-component-names': ['off'],
    'import/no-duplicates': ['off'],
  },
};
