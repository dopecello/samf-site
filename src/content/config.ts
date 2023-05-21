import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    venue: z.string(),
    address: z.string(),
    concertDay: z.string(),
    concertDate: z.string(),
    concertTime: z.string(),
    description: z.string(),
    artists: z.array(z.object({
      name: z.string(),
      instrument: z.string().optional(),
      specialGuest: z.boolean(),
      img: z.string(),
    })),
    program: z.array(z.object({
      composer: z.string(),
      title: z.array(z.string()),
    })),
    cardImg: z.string(),
    cardMonth: z.string(),
    cardDay: z.number(),
    cardYear: z.number(),
  }),
})

export const collections = { blog }

