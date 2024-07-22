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
    "@storybook/addon-storysource",
    "@storybook/storybook-react-context"
  ],

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  docs: {
    autodocs: "tag",
  },

  staticDirs: ["..\\public"],

  typescript: {
    reactDocgen: "react-docgen-typescript",
    check: false,
    checkOptions: {},
    skipCompiler: false,
  },

  previewHead: (head) => `
    ${head}
    <div id="modal"></div>
    <div id="root"></div>
  `,
};
export default config;
