import {TaskStateType} from "../App";

type ActionType = RemoveTaskActionType | SomeType2

export type RemoveTaskActionType = {
    type: 'REMOVE-TASK'
    taskId: string
    todolistId: string
}
export type SomeType2 = {
    type: ''
    title: string
}

export const tasksReducer = (state: TaskStateType, action: ActionType): TaskStateType => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            let stateCopy = {...state}
            const tasks = state[action.todolistId]
            const filteredTasks = tasks.filter(t => t.id !== action.taskId)
            stateCopy[action.todolistId] = filteredTasks
            return stateCopy
        }
        default:
            throw new Error("I don't understand this type")
    }
}
export const removeTaskAC = (taskId: string, todolistId: string): RemoveTaskActionType => {
    return {type: 'REMOVE-TASK', taskId, todolistId}
}
export const SomeAC2 = (title: string): SomeType2 => {
    return {type: "", title}
}

