import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-actions",
    "@storybook/addon-interactions",
    "@storybook/addon-controls",
    "@storybook/addon-mdx-gfm",
    "@chromatic-com/storybook",
    "@storybook/addon-styling-webpack",
  ],

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  docs: {},

  staticDirs: ["..\\public"],

  typescript: {
    reactDocgen: "react-docgen-typescript"
  },

  previewHead: (head) => `
    ${head}
    <div id="modal"></div>
  `,
};
export default config;
