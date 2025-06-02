export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Home',
      initialValue: () => 'Home',
    },
    {
      name: 'homepagedata',
      title: 'Home Page Data',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
        },
        {
          name: 'bio',
          title: 'Bio',
          type: 'text',
        },
        {
          name: 'profileImage',
          title: 'Profile Image',
          type: 'image',
        },
      ],
    },
    {
      name: 'contact',
      title: 'Contact Info',
      type: 'object',
      fields: [
        {
          name: 'mapIframe',
          title: 'Google Map Iframe URL',
          type: 'url', // or 'string' if you want full iframe embed code
          description: 'Paste the iframe src URL from Google Maps embed',
        },
        {
          name: 'phone',
          title: 'Phone',
          type: 'string',
        },
        {
          name: 'location',
          title: 'Location',
          type: 'string',
        },
        {
          name: 'email',
          title: 'Email',
          type: 'string',
        },
      ],
    },
  ],
}
