import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export enum BlogType {
    dev = "dev",
    beyond = "beyond",
}

const blog = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        category: z.nativeEnum(BlogType),
        publicationDate: z.coerce.date(),
        editDate: z.coerce.date().optional(),
        tags: z.array(z.string()),
        slug: z.string().optional(),
    }),
});

export const collections = {
    blog,
};