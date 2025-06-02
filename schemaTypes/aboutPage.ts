export default {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'About US',
      initialValue: () => 'About me',
    },
    {
      name: 'aboutHeader',
      title: 'About Page Header',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'About Page Title',
          type: 'string',
          initialValue: () => 'About Us',
        },
        {
          name: 'description',
          title: 'About Page Description',
          type: 'text',
        },
        {
          name: 'coverImage',
          title: 'Cover Image',
          type: 'image',
        },
      ],
    },
    {
      name: 'descriptionSections',
      title: 'Description Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Section Title',
            },
            {
              name: 'description',
              type: 'text',
              title: 'Section Description',
            },
            {
              name: 'multiImages',
              title: 'Section Images',
              type: 'array',
              of: [{type: 'image'}],
            },
          ],
        },
      ],
    },
    {
      name: 'brands',
      title: 'Brands',
      type: 'object', // object banao, jisme title aur array dono ho
      fields: [
        {
          name: 'title',
          title: 'Main Title',
          type: 'string',
          initialValue: 'Brands', // default value bhi de sakte ho
        },
        {
          name: 'items',
          title: 'Brands List',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'name',
                  type: 'string',
                  title: 'Brand Name',
                },
                {
                  name: 'yearFrom',
                  type: 'string',
                  title: 'Year From',
                },
                {
                  name: 'yearTo',
                  type: 'string',
                  title: 'Year To',
                },
                {
                  name: 'description',
                  type: 'text',
                  title: 'Brand Description',
                },
              ],
            },
          ],
        },
      ],
    },

    {
      name: 'whatDrivesMe',
      title: 'What Drives Me',
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Section Title',
          initialValue: () => 'What Drives Me',
        },
        {
          name: 'description',
          type: 'text',
          title: 'Description',
        },
      ],
    },
  ],
}
