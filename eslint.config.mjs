import perfectionist from 'eslint-plugin-perfectionist'

// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  plugins: {
    perfectionist,
  },
  rules: {
    'perfectionist/sort-imports': 'error',
    'no-console': 'error',
  },
})
