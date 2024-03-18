
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
options: {
    dateFormat: 'YYYY-MM',
  }
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
options: {
    dateFormat: 'YYYY-MM',
  }
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
  ],
})
