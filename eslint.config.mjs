import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import tailwindcss from 'eslint-plugin-tailwindcss';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

const eslintConfig = [
  {
    ignores: ['**/node_modules/', '**/.next/', '**/public/']
  },
  ...fixupConfigRules(
    compat.extends(
      'next/core-web-vitals',
      'prettier',
      'plugin:react-hooks/recommended',
      'plugin:tailwindcss/recommended',
      'plugin:@tanstack/eslint-plugin-query/recommended'
    )
  ),
  {
    plugins: {
      tailwindcss: fixupPluginRules(tailwindcss)
    },

    rules: {
      '@next/next/no-img-element': 'off',
      'tailwindcss/classnames-order': 'error',
      'tailwindcss/no-custom-classname': 'off',
      'no-console': ['error']
    }
  }
];

export default eslintConfig;
