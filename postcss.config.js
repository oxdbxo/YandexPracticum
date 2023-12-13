import autoprefixer from "autoprefixer";
import postcssNesting from 'postcss-nesting'

module.exports = {
  parser: 'sugarss',
  map: false,
  plugins: {
    'postcss-plugin': {
      autoprefixer,
      postcssNesting,
      'postcss-sorting': {
        order: [
          'custom-properties',
          'dollar-variables',
          'declarations',
          'at-rules',
          'rules',
        ],
        'properties-order': 'alphabetical',
        'unspecified-properties-position': 'bottom',
      },
    }
  }
}
