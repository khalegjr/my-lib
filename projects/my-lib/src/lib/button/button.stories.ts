import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/angular";

import { ButtonComponent } from "./button.component";

storiesOf("my-lib", module).add("button", () => ({
  component: ButtonComponent,
  props: {
    text: "Hello",
    click: action("You clicked me..."),
  },
}));
