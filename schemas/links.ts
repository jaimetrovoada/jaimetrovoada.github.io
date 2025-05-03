import { defineField, defineType } from 'sanity'
import * as Icons from "react-feather";
import { title } from 'node:process';

const iconsNames = Object.keys(Icons).map((icon) => icon)
// console.log({ iconsNames })

export default defineType({
  name: 'links',
  title: 'Links',
  type: 'document',
  fields: [
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'Url',
      type: "url",
    }),
    defineField({
      name: 'iconName',
      title: 'Icon Name',
      type: 'string',
      options: {
        list: iconsNames.map(icon => ({ title: icon, value: icon })),
      }
    }),
  ],
  preview: {
    select: {
      title: 'name',
      // media: 'image',
    },
  },
})
