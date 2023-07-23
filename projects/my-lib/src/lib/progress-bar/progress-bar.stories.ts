import { MatProgressBarModule } from "@angular/material/progress-bar";
import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { ProgressBarComponent } from "./progress-bar.component";

const meta: Meta<ProgressBarComponent> = {
  title: "Atom/My-ProgressBar",
  component: ProgressBarComponent,
  tags: ["autodocs"],
  render: (args: ProgressBarComponent) => ({
    props: {
      ...args,
    },
  }),
  decorators: [
    moduleMetadata({
      imports: [MatProgressBarModule],
    }),
  ],
  argTypes: {
    color: {
      options: ["primary", "accent", "warn"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<ProgressBarComponent>;

export const Determinate: Story = {
  args: {
    mode: "determinate",
    value: 35,
    color: "primary",
  },
};

export const Indeterminate: Story = {
  args: {
    mode: "indeterminate",
    value: 35,
    color: "accent",
  },
};

export const Buffer: Story = {
  args: {
    mode: "buffer",
    value: 35,
    color: "warn",
  },
};

export const Query: Story = {
  args: {
    mode: "query",
    color: "warn",
  },
};
