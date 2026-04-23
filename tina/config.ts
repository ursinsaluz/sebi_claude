import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "master";

export default defineConfig({
  branch,

  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  // Uncomment to allow cross-origin requests from non-localhost origins
  // during local development (e.g. GitHub Codespaces, Gitpod, Docker).
  // Use 'private' to allow all private-network IPs (WSL2, Docker, etc.)
  // server: {
  //   allowedOrigins: ['https://your-codespace.github.dev'],
  // },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "json",
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "home") {
              return "/";
            }
            return undefined;
          },
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              { type: "string", name: "pretitle", label: "Pre-title" },
              { type: "string", name: "title1", label: "Title Part 1" },
              { type: "string", name: "titleItalic", label: "Title Part 2 (Italic)" },
              { type: "string", name: "titleEnd", label: "Title Part 3" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "ctaPrimary", label: "Primary CTA" },
              { type: "string", name: "ctaSecondary", label: "Secondary CTA" },
            ]
          },
          {
            type: "object",
            list: true,
            name: "philosophy",
            label: "Philosophy Items",
            ui: { itemProps: (item) => ({ label: item?.title }) },
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "pretitle", label: "Pre-title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "image", name: "image", label: "Image" },
            ]
          },
          {
            type: "object",
            list: true,
            name: "signatureDishes",
            label: "Signature Dishes",
            ui: { itemProps: (item) => ({ label: item?.title }) },
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "tag", label: "Top Tag (e.g. signature)" },
              { type: "string", name: "bottomTag", label: "Bottom Tag (e.g. Dessert · Winter)" },
            ]
          },
          {
            type: "object",
            list: true,
            name: "news",
            label: "Press & News",
            ui: { itemProps: (item) => ({ label: item?.title }) },
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "publisher", label: "Publisher" },
              { type: "string", name: "date", label: "Date" },
              { type: "string", name: "tag", label: "Tag" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
            ]
          },
          {
            type: "object",
            list: true,
            name: "offers",
            label: "Offers",
            ui: { itemProps: (item) => ({ label: item?.title }) },
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "cta", label: "CTA Text" },
              { type: "boolean", name: "featured", label: "Is Featured?" },
            ]
          },
          {
            type: "object",
            name: "restaurant",
            label: "Restaurant Info",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "address", label: "Address", ui: { component: "textarea" } },
              { type: "string", name: "hours", label: "Hours", ui: { component: "textarea" } },
              { type: "string", name: "phone", label: "Phone" },
              { type: "string", name: "email", label: "Email" },
              { type: "image", list: true, name: "gallery", label: "Gallery Images" },
            ]
          }
        ],
      },
    ],
  },
});
