import { makeSource } from 'contentlayer/source-files'
import { stackbitConfigToDocumentTypes } from '@contentlayer/experimental-source-files-stackbit'
import stackbitConfig from './stackbit.config.js'

const documentTypes = stackbitConfigToDocumentTypes(stackbitConfig, {
  documentTypes: {
    Page: {
      computedFields: {
        slug: { type: 'string', resolve: (_) => _._raw.flattenedPath.replace(/^pages\/?/, '/') },
        __id: { type: 'string', resolve: (_) => 'content/' + _._id },
      },
    },

    Config: {
      computedFields: {
        __id: { type: 'string', resolve: (_) => 'content/' + _._id },
      },
      fields: { favicon: { type: 'string' } },
    },
  },
  nestedTypes: {
    Image: { fields: { url: { type: 'string' } } },
  },
})

// TODO derive `contentDirPath` from Stackbit config
export default makeSource({ contentDirPath: 'content', documentTypes })
