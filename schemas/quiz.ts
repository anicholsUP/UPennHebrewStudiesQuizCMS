
export default {
    name: 'quiz',
    type: 'document',
    title: 'Quiz',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'course',
        title: 'Course',
        type: 'reference',
        to: [{type: 'course'}]
      },
      {
        name: 'sections',
        type: 'array',
        title: 'Sections',
        of: [{type: 'quizsection'}]
      }
    ]
}