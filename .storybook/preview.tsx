import type { Preview } from "@storybook/react";
import React from "react";
import { ToastProvider4 } from '../src/stories/toast/Toast4';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on.*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  // NOTE: context api 테스트코드.
  // decorators: [
  //   (Story) => (
  //     <UserProvider>
  //       <Story />
  //     </UserProvider>
  //   ),
  // ],
};


export default preview;