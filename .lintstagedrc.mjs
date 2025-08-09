import path from 'path'

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`

const lintStagedConfig = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
  '**/*.{ts,tsx}': () => 'tsc --noEmit',
  '*.{md,mdx,css,scss,json,html,graphql,yaml,yml}': ['prettier --write'],
}

export default lintStagedConfig
