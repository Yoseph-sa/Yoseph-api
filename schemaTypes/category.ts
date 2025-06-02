export default {
  name: 'categorys',
  title: 'Categorys',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
      description: 'Category display name',
    }
  ], 
}
