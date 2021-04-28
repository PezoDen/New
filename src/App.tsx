import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type FilterValuesType = 'all' | 'active' | 'completed'
function App() {
    let [tasks, SetTasks] = useState([
        {id:1, title: "HTML&CSS", isDone: true},
        {id:2, title: "React", isDone: true},
        {id:3, title: "JS", isDone: false},
        {id:4, title: "X", isDone: true},
        {id:5, title: "B", isDone: false},
    ])
    let [filter, setFilter] = useState<FilterValuesType>('all')
    let tasksForTodolist = tasks
    if (filter === 'active') {
        tasksForTodolist= tasks.filter(t => t.isDone === false)
    }
    if (filter === 'completed') {
        tasksForTodolist= tasks.filter(t => t.isDone === true)
    }
    function changeFilter(value: FilterValuesType) {
        setFilter(value)
    }
    // const task2 = [
    //     {id:1, title: "Milk", isDone: false},
    //     {id:2, title: "Beer", isDone: true},
    //     {id:3, title: "Bread", isDone: false},
    // ]

    function removeTask (id: number) {
        let filteredTasks = tasks.filter(t => t.id != id)
        SetTasks(filteredTasks)
    }

    return (
        <div className="App">
            <Todolist title={"What to learn"}
                      task={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
            />
            {/*<Todolist title={"What to buy"} task={task2}/>*/}
        </div>
    );
}

export default App;
