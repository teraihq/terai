import { defineConfig } from '@rewordlabs/dev'

export default defineConfig({
  // Where to look for your locale declarations
  include: ['./app/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // The base locale used in your project
  projectLocale: 'en',

  // The output directory for your locale system
  outDir: './app/locale',

  // Your OpenAI API key
  locales: []
})
