import type * as Stackbit from '@stackbit/sdk'

export const Image: Stackbit.YamlObjectModel = {
  type: 'object',
  label: 'Image',
  labelField: 'altText',
  fields: [
    {
      type: 'image',
      name: 'url',
      label: 'Image',
      description: 'The URL of the image',
      default: 'https://assets.stackbit.com/components/images/default/default-image.png',
    },
    {
      type: 'string',
      name: 'altText',
      label: 'Alt text',
      description: 'The alt text of the image',
      default: 'Image alt text',
    },
  ],
}
