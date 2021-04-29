import React, {ChangeEvent, KeyboardEvent, useState} from "react";

type AddItemFormPropsType = {
    addTask: (title: string, todolistId: string) => void
    id: string
}

export function AddItemForm(props: AddItemFormPropsType) {
    let [title, setTitle] = useState('')
    let [error, setError] = useState<string | null>(null)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.charCode === 13) {
            addTAsk()
        }
    }
    const addTAsk = () => {
        if (title.trim() !== '') {
            props.addTask(title, props.id)
            setTitle("")
        } else {
            setError("Title is required")
        }
    }

    return <div>
        <input value={title}
               onChange={onChangeHandler}
               onKeyPress={onKeyPressHandler}/>
        <button onClick={addTAsk}>+</button>
        {error && <div className={"error-message"}>{error}</div>}
    </div>


}