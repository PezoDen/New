import React, {useCallback} from 'react';
import {FilterValuesType} from "./App";
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";
import {Button, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";
import {Task} from "./Task";

export type TodolistPropsType = {
    id: string
    title: string
    tasks: TaskType[]
    removeTask: (id: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeStatus: (id: string, isDone: boolean, todolistId: string) => void
    changeTaskTitle: (id: string, newTitle: string, todolistId: string) => void
    filter: FilterValuesType
    removeTodolist: (todolistId: string) => void
    changeTodolistTitle: (todolistId: string, newTitle: string) => void
}
export type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}

export const Todolist = React.memo((props: TodolistPropsType) => {
    console.log("Todolist called")
    const addTask = useCallback((title: string) => {
        props.addTask(title, props.id)
    }, [props.addTask, props.id])
    const removeTodolist = () => {
        props.removeTodolist(props.id)
    }
    const changeTodolistTitle = useCallback((newTitle: string) => {
        props.changeTodolistTitle(props.id, newTitle)
    }, [props.changeTodolistTitle, props.id])

    const onAllClickHandler = useCallback(() => {
        props.changeFilter('all', props.id)
    }, [props.changeFilter, props.id])
    const onActiveClickHandler = useCallback(() => {
        props.changeFilter('active', props.id)
    }, [props.changeFilter, props.id])
    const onCompletedClickHandler = useCallback(() => {
        props.changeFilter('completed', props.id)
    }, [props.changeFilter, props.id])

    let tasksForTodolist = props.tasks
    if (props.filter === 'active') {
        tasksForTodolist = props.tasks.filter(t => t.isDone === false)
    }
    if (props.filter === 'completed') {
        tasksForTodolist = props.tasks.filter(t => t.isDone === true)
    }


    return <div>
        <h3>
            <EditableSpan title={props.title} onChange={changeTodolistTitle}/>
            <IconButton onClick={removeTodolist}>
                <Delete/>
            </IconButton>
        </h3>
        <AddItemForm addItem={addTask}/>
        <div>
            {
                props.tasks.map(t =>
                    <Task
                        task={t}
                        todolistId={props.id}
                        changeTaskTitle={props.changeTaskTitle}
                        removeTask={props.removeTask}
                        changeStatus={props.changeStatus}
                        key={t.id}
                    />
                )
            }
        </div>
        <div>
            <Button
                variant={props.filter === "all" ? 'contained' : 'text'}
                onClick={onAllClickHandler}
                color={'default'}
            >All</Button>
            <Button
                variant={props.filter === "active" ? 'contained' : 'text'}
                color={'primary'}
                onClick={onActiveClickHandler}>Active
            </Button>
            <Button
                variant={props.filter === "completed" ? 'contained' : 'text'}
                color={'secondary'}
                onClick={onCompletedClickHandler}>Completed
            </Button>
        </div>
    </div>
})

