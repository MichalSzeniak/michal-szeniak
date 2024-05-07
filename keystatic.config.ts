import { config, collection, fields, singleton } from "@keystatic/core";

// const storage: LocalConfig["storage"] | GitHubConfig["storage"] =
//   process.env.NODE_ENV === "development"
//     ? { kind: "local" }
//     : {
//         kind: "github",
//         repo: {
//           owner: process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER!,
//           name: process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG!,
//         },
//       };

export default config({
  storage: {
    kind: "github",
    repo: {
      owner: "MichalSzeniak",
      name: "michal-szeniak",
    },
  },
  ui: {
    brand: {
      name: "Blog",
    },
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "content/posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
        author: fields.relationship({
          label: "Author",
          collection: "authors",
        }),
      },
    }),

    authors: collection({
      label: "Authors",
      slugField: "name",
      path: "content/authors/*",
      format: { data: "json" },
      schema: {
        name: fields.slug({ name: { label: "Name" } }),
        avatar: fields.image({
          label: "Avatar",
          directory: "public/images/avatars",
          publicPath: "/images/avatars",
        }),
      },
    }),
  },

  singletons: {
    socialLinks: singleton({
      label: "Social Links",
      path: "content/social-links",
      schema: {
        github: fields.text({
          label: "GitHub",
          description: "the GitHub username (not full URL!)",
        }),
        linkedin: fields.text({
          label: "Linkedin",
          description: "the Linkeding ID (not full URL!)",
        }),
      },
    }),
  },
});
