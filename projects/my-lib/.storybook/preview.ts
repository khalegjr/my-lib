import "!style-loader!css-loader!sass-loader!../src/lib/styles.scss";
import type { Preview } from "@storybook/angular";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
