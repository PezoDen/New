import React from 'react';
import {action} from "@storybook/addon-actions";
import {EditableSpan} from "./EditableSpan";


export default {
    title: 'EditableSpan component',
    component: EditableSpan,
}

const changeCallback = action('title changed')

export const EditableSpanBaseExample = () => {
    return<EditableSpan title={'start value'} onChange={changeCallback}/>
}

