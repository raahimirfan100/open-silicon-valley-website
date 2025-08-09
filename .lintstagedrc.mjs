import path from 'path'

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`

const lintStagedConfig = {
  // Run Prettier on code files first, then ESLint fix on the same set
  '*.{js,jsx,ts,tsx}': ['prettier --write', buildEslintCommand],
  // Type-check changed TS files
  '**/*.{ts,tsx}': () => 'tsc --noEmit',
  // Format other text/config files
  '*.{md,mdx,css,scss,json,html,graphql,yaml,yml}': ['prettier --write'],
}

export default lintStagedConfig
