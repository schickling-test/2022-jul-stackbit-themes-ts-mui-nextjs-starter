import type * as Stackbit from '@stackbit/sdk'

export const Header: Stackbit.YamlObjectModel = {
  type: 'object',
  label: 'Header',
  labelField: 'title',
  readOnly: true,
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Title',
      default: 'Your Brand',
    },
    {
      type: 'list',
      name: 'navLinks',
      label: 'Navigation links',
      items: {
        type: 'model',
        models: ['Link'],
      },
      default: [
        {
          type: 'Link',
          label: 'Home',
          url: '/',
        },
        {
          type: 'Link',
          label: 'About',
          url: '/',
        },
      ],
    },
  ],
}
