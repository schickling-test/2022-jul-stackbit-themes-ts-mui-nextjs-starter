import { makeSource } from 'contentlayer/source-files';
import { addComputedFields, loadStackbitConfigAsDocumentTypes } from '@contentlayer/source-files-stackbit';

export default loadStackbitConfigAsDocumentTypes().then((documentTypes) => {
    addComputedFields({
        documentTypes,
        documentTypeName: 'Page',
        computedFields: {
            slug: { type: 'string', resolve: (_) => _._raw.flattenedPath.replace(/^pages\/?/, '/') },
            __id: { type: 'string', resolve: (_) => _._id }
        }
    });

    addComputedFields({
        documentTypes,
        documentTypeName: 'Config',
        computedFields: {
            __id: { type: 'string', resolve: (_) => _._id }
        }
    });

    return makeSource({ contentDirPath: 'content', documentTypes });
});
