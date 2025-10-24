export default {
  name: 'project2',
  type: 'document',
  title: 'Portfolio Project',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Project Name',
      validation: (Rule: any) =>
        Rule.required().custom(async (value: any, context: any) => {
          if (!value) return true

          const {document, getClient} = context
          const client = getClient({apiVersion: '2023-10-01'})

          // Handle both draft and published IDs
          const docId = document._id.replace(/^drafts\./, '')

          // ✅ Ignore current draft/published pair
          const existing = await client.fetch(
            `*[_type == "project2" && name == $name && !(_id in [$draftId, $publishedId])][0]`,
            {
              name: value,
              draftId: `drafts.${docId}`,
              publishedId: docId,
            },
          )

          return existing ? 'A project with this name already exists.' : true
        }),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
        maxLength: 96,
        slugify: (input: any) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-') // replace spaces with hyphens
            .replace(/[^\w-]+/g, '') // remove invalid chars
            .slice(0, 96),
      },
      validation: (Rule: any) =>
        Rule.required().custom(async (value: any, context: any) => {
          if (!value?.current) return 'Slug is required'
          const {document, getClient} = context
          const client = getClient({apiVersion: '2023-10-01'})

          const docId = document._id.replace(/^drafts\./, '')

          // ✅ Ignore current draft/published pair
          const existing = await client.fetch(
            `*[_type == "project2" && slug.current == $slug && !(_id in [$draftId, $publishedId])][0]`,
            {
              slug: value.current,
              draftId: `drafts.${docId}`,
              publishedId: docId,
            },
          )

          return existing ? 'A project with this slug already exists.' : true
        }),
    },

    {
      name: 'image',
      type: 'image',
      title: 'Cover Image',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array', // array type for multiple entries
      of: [
        {
          type: 'reference', // each item is a reference
          to: [{type: 'categorys'}], // pointing to your categories table
        },
      ],
      description: 'Select one or more categories for this project',
    },
    {
      name: 'projectid',
      type: 'string',
      title: 'Project ID',
    },
    {
      name: 'userClass',
      type: 'string',
      title: 'User Class',
    },
    {
      name: 'years',
      type: 'string',
      title: 'Year',
    },
    {
      name: 'projectImages',
      type: 'array',
      title: 'Project Images',
      of: [{type: 'image'}],
    },
    {
      name: 'multiImages',
      type: 'array',
      title: 'Gallery Images',
      of: [{type: 'image'}],
    },
    {
      name: 'descriptionTitle',
      type: 'string',
      title: 'Description Title',
    },
    {
      name: 'shortDescription',
      type: 'string',
      title: 'Short Description',
    },
    {
      name: 'descriptionImage',
      type: 'image',
      title: 'Description Image',
    },
    {
      name: 'link',
      type: 'object',
      title: 'Project Link',
      fields: [
        {name: 'title', type: 'string', title: 'Link Title'},
        {name: 'url', type: 'url', title: 'URL'},
      ],
    },
    {
      name: 'description',
      type: 'object',
      title: 'Detailed Description',
      fields: [
        {
          name: 'ProjectOverview',
          type: 'object',
          title: 'Project Overview',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Title',
              initialValue: () => 'Project Overview',
            },
            {name: 'content', type: 'text', title: 'Content'},
          ],
        },
        {
          name: 'ConceptObjective',
          type: 'object',
          title: 'Concept & Objective',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Title',
              initialValue: () => 'Concept & Objective',
            },
            {name: 'content', type: 'text', title: 'Content'},
          ],
        },
        {
          name: 'DesignProcess',
          type: 'object',
          title: 'Design Process',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Title',
              initialValue: () => 'Design Process',
            },
            {
              name: 'description',
              type: 'text',
              title: 'Section Description', // This is the new field
            },
            {
              name: 'content',
              type: 'array',
              title: 'Process Steps',
              of: [
                {
                  type: 'object',
                  fields: [
                    {name: 'title', type: 'string', title: 'Step Title'},
                    {name: 'content', type: 'text', title: 'Step Detail'},
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'ResearchInspiration',
          type: 'object',
          title: 'Research Inspiration',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Title',
              initialValue: () => 'Research Inspiration',
            },
            {name: 'content', type: 'text', title: 'Content'},
          ],
        },
        {
          name: 'impactReflection', // ✅ Fixed from Impact&Reflection
          type: 'object',
          title: 'Impact & Reflection',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Title',
              initialValue: () => 'Impact & Reflection',
            },
            {name: 'content', type: 'text', title: 'Content'},
          ],
        },
        {
          name: 'ProjectHighlights',
          type: 'object',
          title: 'Project Highlights',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Title',
              initialValue: () => 'Project Highlights',
            },
            {
              name: 'content',
              type: 'array',
              title: 'Highlights',
              of: [
                {
                  type: 'object',
                  fields: [
                    {name: 'title', type: 'string', title: 'Highlight Title'},
                    {name: 'content', type: 'text', title: 'Highlight Detail'},
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'conclusion',
          type: 'object',
          title: 'Conclusion',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Title',
              initialValue: () => 'Conclusion',
            },
            {name: 'content', type: 'text', title: 'Conclusion Text'},
          ],
        },
      ],
    },
    {
      name: 'iframes',
      type: 'array',
      title: 'Iframes',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'src',
              type: 'url',
              title: 'Iframe Source URL',
            },
          ],
        },
      ],
    },
  ],
}
