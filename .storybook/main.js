/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@dylandepass/franklin-storybook-addon"
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  staticDirs: [
    { from: "../scripts", to: "/scripts" }, 
    { from: "../styles", to: "/styles" }, 
    { from: "../icons", to: "/icons" }
  ],
};
export default config;
