import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Card, CardProps } from "./Card";

export default {
  title: "Example/Card",
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Topic1 = Template.bind({});
Topic1.args = {
  topicId: "0001",
};

export const Topic2 = Template.bind({});
Topic2.args = {
  topicId: "0002",
};

export const Topic3 = Template.bind({});
Topic3.args = {
  topicId: "0003",
};

export const TopicByName = Template.bind({});
TopicByName.args = {
  topicName: "COVID-19",
};
