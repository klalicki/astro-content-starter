// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { glob, file } from "astro/loaders";

// 3. Define your collection(s)
const projects = defineCollection({
  // this line defines the type of file to make into a collection, plus the folder to look in for files.
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/projects",
    // this allows you to use subfolders to organize files in the content collection
    // note that the subfolder name itself doesn't matter, just the name of the Markdown file inside it
    generateId: ({ entry }) => {
      const filename = (entry.split("/").pop() ?? "").split(".")[0];
      return filename;
    },
  }),

  schema: ({ image }) =>
    z
      .object({
        // This is a section you can use to define a 'shape' for the data on each page
        // see this section for an overview of how this works.
        // https://docs.astro.build/en/guides/content-collections/#defining-datatypes-with-zod
        // if you want to use images in your front matter then use them in templates
        // (ie defining a thumbnail or hero image), you will need to define them here:
        thumbnail: z.optional(image()),
      
      })
      // this next line allows you to use other properties without specifically defining them:
      .passthrough(),
  /* ... */
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { projects };
