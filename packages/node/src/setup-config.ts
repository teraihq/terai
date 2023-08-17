// Dependencies
import { findConfig } from './find-config'
import { findTsConfig } from './find-tsconfig'
import { logger } from '@rosseta/logger'
import { outdent } from 'outdent'
import { runtime } from './runtime'
import getPackageManager from 'preferred-pm'

type SetupOptions = {
  force?: boolean
  outExtension?: string
  cwd: string
}

export async function setupConfig({ force, outExtension, cwd }: SetupOptions) {
  const configFile = findConfig({ cwd })
  const pmResult = await getPackageManager(cwd)
  const pm = pmResult?.name ?? 'npm'
  const cmd = pm === 'npm' ? 'npm run' : pm
  const isTs = findTsConfig()
  const fileName = isTs ? 'rosseta.config.ts' : 'rosseta.config.mjs'

  logger.info('init:config', `creating rosseta config file: ${fileName}`)

  if (!force && configFile) {
    logger.warn(
      'init:config',
      outdent`
        It looks like you already have rosseta created\`.
        You can now run '${cmd} rosseta --watch'.
      `
    )
  } else {
    const content = outdent`
      import { defineConfig } from "@rosseta/dev"

      export default defineConfig({
        // Where to look for your locale declarations
        include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

        // Files to exclude
        exclude: [],

        // The output directory for your locale system
        outDir: "locale",

        // The extension for the emitted JavaScript files
        outExtension: "${outExtension || isTs ? '.ts' : '.js'}",
      })
    `

    runtime.fs.write(runtime.path.join(cwd, fileName), content)

    logger.log(outdent`
      🚀 Thanks for choosing Rosseta.
      You are set up to start using it!
    `)
  }
}