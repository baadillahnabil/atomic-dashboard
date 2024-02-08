const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname),
      src: path.resolve(__dirname, "src/"),
      atoms: path.resolve(__dirname, "src/components/atoms/"),
      molecules: path.resolve(__dirname, "src/components/molecules/"),
      organisms: path.resolve(__dirname, "src/components/organisms/"),
      templates: path.resolve(__dirname, "src/components/templates/"),
      pages: path.resolve(__dirname, "src/components/pages/"),
    },
  },
  typescript: {
    enableTypeChecking: true /* (default value) */,
  },
};
