/** @type {import('prettier').Config} */
module.exports = {
  endOfLine: 'lf',
  semi: true,
  printWidth: 80,
  tabWidth: 2,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'none',
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '^types$',
    '^~/core/types/(.*)$',
    '^~/core/config/(.*)$',
    '^~/core/lib/(.*)$',
    '^~/core/repositories/(.*)$',
    '^~/core/hooks/(.*)$',
    '^~/core/providers/(.*)$',
    '^~/core/components/ui/(.*)$',
    '^~/core/components/(.*)$',
    '^~/core/styles/(.*)$',
    '^~/app/(.*)$',
    '',
    '^[./]'
  ],
  plugins: ['@ianvs/prettier-plugin-sort-imports']
};
