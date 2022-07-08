// NOTE the APIs in this file are an early draft and should evolve based on feedback
import { makeSource } from 'contentlayer/source-files'
import { addComputedFields, stackbitConfigToDocumentTypes } from '@contentlayer/experimental-source-files-stackbit'
import stackbitConfig from './stackbit.config.js'

const documentTypes = stackbitConfigToDocumentTypes(stackbitConfig)

addComputedFields({
  documentTypes,
  documentTypeName: 'Page',
  computedFields: {
    slug: { type: 'string', resolve: (_) => _._raw.flattenedPath.replace(/^pages\/?/, '/') },
    __id: { type: 'string', resolve: (_) => 'content/' + _._id },
  },
})

addComputedFields({
  documentTypes,
  documentTypeName: 'Config',
  computedFields: {
    __id: { type: 'string', resolve: (_) => 'content/' + _._id },
  },
})

// TODO derive `contentDirPath` from Stackbit config
export default makeSource({ contentDirPath: 'content', documentTypes })
