import type { Preview } from "@storybook/react";
import React from "react";
import { ToastProvider4 } from '../src/stories/toast/Toast4';
import '../src/styles/global.scss';

const preview: Preview = {
  parameters: {
    // actions: { argTypesRegex: "^on.*" },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
        <Story />
      </>
    ),
  ],
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
