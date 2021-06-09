import React from 'react';
import {action} from "@storybook/addon-actions";
import {Task} from "./Task";


export default {
  title: 'Task component',
  component: Task,
}

const changeStatusCallback = action('status changed')
const changeTaskTitleCallback = action('title changed')
const removeTaskCallback = action('task removed')

export const TaskBaseExample = () => {
  return <React.Fragment>
    <Task
        task={{id: '1', isDone: true, title: 'CSS'}}
        todolistId={'todolistId1'}
        changeTaskTitle={changeTaskTitleCallback}
        removeTask={removeTaskCallback}
        changeStatus={changeStatusCallback}
    />
    <Task
        task={{id: '2', isDone: false, title: 'HTML'}}
        todolistId={'todolistId2'}
        changeTaskTitle={changeTaskTitleCallback}
        removeTask={removeTaskCallback}
        changeStatus={changeStatusCallback}
    />
  </React.Fragment>
}