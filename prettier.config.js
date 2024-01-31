/** @type {import('prettier').Options} */
module.exports = {
  singleQuote: true,
  semi: false,
  trailingComma: 'none',
  bracketSameLine: true,
  plugins: [
    'prettier-plugin-tailwindcss',
    '@trivago/prettier-plugin-sort-imports'
  ],
  //prettier-plugin-tailwindcss
  tailwindFunctions: ['clsx'],
  // tailwindConfig: './tailwind.config.js',
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
}
