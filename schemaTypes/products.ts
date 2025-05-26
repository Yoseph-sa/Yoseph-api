export default {
  name: 'project2',
  type: 'document',
  title: 'Portfolio Project',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Project Name',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Cover Image',
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
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
