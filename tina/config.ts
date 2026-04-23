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
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "global",
        label: "Globale Einstellungen",
        path: "content/global",
        format: "json",
        ui: {
          global: true,
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "header",
            label: "Header",
            fields: [
              {
                type: "object",
                list: true,
                name: "nav",
                label: "Navigation",
                ui: {
                  itemProps: (item) => {
                    return { label: item?.label };
                  },
                },
                fields: [
                  { type: "string", name: "id", label: "ID" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "href", label: "Link" },
                ],
              },
              {
                type: "object",
                name: "cta",
                label: "Call to Action",
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "href", label: "Link" },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "footer",
            label: "Footer",
            fields: [
              {
                type: "string",
                ui: { component: "textarea" },
                name: "quote",
                label: "Zitat (Motto)",
              },
              {
                type: "string",
                ui: { component: "textarea" },
                name: "visit",
                label: "Besuchen",
              },
              {
                type: "string",
                ui: { component: "textarea" },
                name: "contact",
                label: "Kontakt",
              },
              {
                type: "object",
                list: true,
                name: "nav",
                label: "Navigation Links",
                ui: {
                  itemProps: (item) => {
                    return { label: item?.label };
                  },
                },
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "href", label: "Link" },
                ],
              },
              {
                type: "string",
                name: "bottomText",
                label: "Copyright (Links)",
              },
              {
                type: "string",
                name: "bottomTextMiddle",
                label: "Copyright (Mitte)",
              },
              {
                type: "string",
                name: "bottomTextRight",
                label: "Version (Rechts)",
              },
            ],
          },
        ],
      },
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
              { type: "image", name: "image", label: "Background Image" },
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
            name: "awards",
            label: "Awards Bar",
            fields: [
              { type: "string", name: "big", label: "Big Text (e.g. 16)" },
              { type: "string", name: "small", label: "Small Text" },
              { type: "string", name: "sub", label: "Sub Text" },
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
            name: "chef",
            label: "The Chef Section",
            fields: [
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "title1", label: "Title Part 1" },
              { type: "string", name: "titleItalic", label: "Title Part 2 (Italic)" },
              { type: "string", name: "titleEnd", label: "Title Part 3" },
              { type: "string", name: "text1", label: "Text Paragraph 1", ui: { component: "textarea" } },
              { type: "string", name: "text2", label: "Text Paragraph 2", ui: { component: "textarea" } },
              { type: "string", name: "ctaPrimary", label: "Primary CTA" },
              { type: "string", name: "ctaSecondary", label: "Secondary CTA" },
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
          },
          {
            type: "string",
            list: true,
            name: "marquee",
            label: "Marquee Words",
          }
        ],
      },
      {
        name: "legal",
        label: "Legal Pages",
        path: "content/legal",
        format: "json",
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "impressum") {
              return "/impressum";
            }
            if (document._sys.filename === "datenschutz") {
              return "/datenschutz";
            }
            return undefined;
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "lastUpdated",
            label: "Zuletzt aktualisiert (z.B. 21. APRIL 2026)",
          },
          {
            type: "object",
            list: true,
            name: "sections",
            label: "Abschnitte",
            ui: {
              itemProps: (item) => {
                return { label: item?.title };
              },
            },
            fields: [
              { type: "string", name: "title", label: "Titel" },
              { type: "string", ui: { component: "textarea" }, name: "content", label: "Inhalt" },
            ],
          },
        ],
      },
      {
        name: "stationen",
        label: "Stationen",
        path: "content/stationen",
        format: "json",
        ui: {
          router: () => "/stationen",
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "text", label: "Intro Text", ui: { component: "textarea" } },
              {
                type: "object",
                list: true,
                name: "stats",
                label: "Stats",
                fields: [
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "label", label: "Label" },
                ]
              }
            ]
          },
          {
            type: "object",
            list: true,
            name: "stations",
            label: "Timeline Stations",
            ui: { itemProps: (item) => ({ label: item?.title }) },
            fields: [
              { type: "string", name: "year", label: "Year" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "place", label: "Place" },
              { type: "string", name: "role", label: "Role" },
              { type: "boolean", name: "current", label: "Is Current Role?" },
              { type: "string", list: true, name: "awards", label: "Awards" },
              { type: "string", name: "body", label: "Description", ui: { component: "textarea" } },
              { type: "image", name: "image", label: "Image" },
            ]
          },
          {
            type: "object",
            list: true,
            name: "education",
            label: "Education",
            ui: { itemProps: (item) => ({ label: item?.title }) },
            fields: [
              { type: "string", name: "year", label: "Year" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "place", label: "Place" },
              { type: "string", name: "note", label: "Note", ui: { component: "textarea" } },
            ]
          },
          {
            type: "object",
            list: true,
            name: "qualifications",
            label: "Qualifications",
            ui: { itemProps: (item) => ({ label: item?.title }) },
            fields: [
              { type: "string", name: "kind", label: "Kind (e.g. Publikation)" },
              { type: "string", name: "year", label: "Year" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "note", label: "Note", ui: { component: "textarea" } },
            ]
          },
          {
            type: "object",
            list: true,
            name: "hobbies",
            label: "Hobbies",
            ui: { itemProps: (item) => ({ label: item?.title }) },
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "note", label: "Note", ui: { component: "textarea" } },
              { type: "image", name: "image", label: "Image (Optional)" },
              { type: "string", name: "placeholder", label: "Placeholder Text (if no image)" },
            ]
          },
          {
            type: "object",
            name: "quote",
            label: "Footer Quote",
            fields: [
              { type: "string", name: "text", label: "Quote Text", ui: { component: "textarea" } },
              { type: "string", name: "author", label: "Author" },
            ]
          }
        ]
      }
    ],
  },
});
