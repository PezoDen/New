import React from 'react';
import {AddItemForm, AddItemFormPropsType} from "./AddItemForm";
import {Meta, Story} from "@storybook/react/types-6-0";
import {action} from "@storybook/addon-actions/dist/ts3.4";




export default {
  title: 'Todolist/AddItemForm',
  component: AddItemForm,
  argTypes: {
    onClick: {
      description: "Button inside form clicked",
    }
  },
} as Meta;

const Template: Story<AddItemFormPropsType> = (args:AddItemFormPropsType) => <AddItemForm {...args} />;

export const AddItemFormExample = Template.bind({});
AddItemFormExample.args = {
  addItem: action("Button inside form clicked")
}