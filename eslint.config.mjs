// import { defineConfig, globalIgnores } from "eslint/config";
// import nextVitals from "eslint-config-next/core-web-vitals";
// import nextTs from "eslint-config-next/typescript";
//
// const eslintConfig = defineConfig([
//   ...nextVitals,
//   ...nextTs,
//   // Override default ignores of eslint-config-next.
//   globalIgnores([
//     // Default ignores of eslint-config-next:
//     ".next/**",
//     "out/**",
//     "build/**",
//     "next-env.d.ts",
//   ]),
// ]);
//
// export default eslintConfig;
import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: {
    indent: 2,
    quotes: 'single',
    overrides: {
      'antfu/top-level-function': 'off',
    },
  },

  typescript: true,
  react: true,

  jsonc: false,
  yaml: false,
})
