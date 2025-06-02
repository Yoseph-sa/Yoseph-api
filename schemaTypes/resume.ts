// schemas/resume.js

export default {
  name: 'resume',
  title: 'Resume',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Resume',
      initialValue: () => 'Resume',
    }, 
    {
      name: 'experience',
      title: 'Experience',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Job Title',
              type: 'string',
            },
            {
              name: 'location',
              title: 'Location',
              type: 'string',
            },
            {
              name: 'yearRangeFrom',
              title: 'Year Range from',
              type: 'string',
            },
            {
              name: 'yearRangeTo',
              title: 'Year Range To',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'courses',
      title: 'Courses',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'image', title: 'Image', type: 'image'},
            {name: 'title', title: 'Course Title', type: 'string'},
            {name: 'name', title: 'Course Name', type: 'string'},
          ],
        },
      ],
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'icon', title: 'Icon (as string)', type: 'string'},
            {name: 'name', title: 'Skill Name', type: 'string'},
          ],
        },
      ],
    },
  ],
}
