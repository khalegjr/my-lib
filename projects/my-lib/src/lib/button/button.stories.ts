import { MatButtonModule } from "@angular/material/button";
import { moduleMetadata, type Meta, type StoryObj } from "@storybook/angular";

import { ButtonComponent } from "./button.component";

const meta: Meta<ButtonComponent> = {
  title: "Atom/My-Button",
  component: ButtonComponent,
  tags: ["autodocs"],
  render: (args: ButtonComponent) => ({
    props: {
      ...args,
    },
  }),
  decorators: [
    moduleMetadata({
      imports: [MatButtonModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    text: "Primário",
  },
};
