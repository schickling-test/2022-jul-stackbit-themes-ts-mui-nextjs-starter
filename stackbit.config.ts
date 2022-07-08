import * as models from './src/stackbit/index.js'
import type * as Stackbit from '@stackbit/sdk'

const stackbitConfig: Stackbit.YamlConfig = {
  models,
  stackbitVersion: '~0.5.0',
  ssgName: 'nextjs',
  nodeVersion: '16',
  cmsName: 'git',
  ...({ customContentReload: true } as any), // TODO fix
  assets: {
    referenceType: 'static',
    staticDir: 'public',
    uploadDir: 'images',
    publicPath: '/',
  },
  dataDir: 'content/data',
  pagesDir: 'content/pages',
  pageLayoutKey: 'type',
  styleObjectModelName: 'ThemeStyle',
  contentModels: {
    Page: {
      isPage: true,
      urlPath: '/{slug}',
      newFilePath: '{slug}.md',
    },
  },
}

export default stackbitConfig
