import React from 'react';
import {AddItemForm, AddItemFormPropsType} from "./AddItemForm";
import {Meta, Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";




export default {
  title: 'AddItemForm',
  component: AddItemForm,
  argTypes: {
    onClick: {
      description: "Button inside form clicked",
    }
  },
} as Meta;

const Template: Story<AddItemFormPropsType> = (args:AddItemFormPropsType) => <AddItemForm {...args} />;

export const AddItemFormBaseExample = Template.bind({});
AddItemFormBaseExample.args = {
  addItem: action("Button inside form clicked")
}