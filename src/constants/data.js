export const explorer = {
  name: "root",
  isFolder: true,
  childrenItems: [
    {
      name: "public",
      isFolder: true,
      childrenItems: [
        {
          name: "index.html",
          isFolder: false,
        },
        {
          name: "manifest.json",
          isFolder: false,
        },
        {
          name: "index.css",
          isFolder: false,
        },
      ],
    },
    {
      name: "src",
      isFolder: true,
      childrenItems: [
        {
          name: "app.js",
          isFolder: false,
        },
        {
          name: "index.js",
          isFolder: false,
        },
        {
          name: "app.css",
          isFolder: false,
        },
      ],
    },
    {
      name: ".git_ignore",
      isFolder: false,
    },
  ],
};
