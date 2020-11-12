import path from "path";
import initStoryshots from "@storybook/addon-storyshots";
import { axeTest } from "@storybook/addon-storyshots-puppeteer";
const storybookUrl = path.resolve(".storybook-static");

initStoryshots({
  suite: "A11y checks",
  test: axeTest({ storybookUrl: `file://${storybookUrl}` }),
});
