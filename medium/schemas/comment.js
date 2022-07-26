export default {
  name: "comment",
  title: "comment",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "approved",
      title: "approved",
      type: "boolean",
      description: "comment won't show on the site without approuval",
    },
    {
      name: "email",
      type: "string",
    },
    {
      name: "comment",
      type: "text",
    },
    {
      name: "post",
      type: "reference",
      to: { type: "post" },
    },
  ],
};
