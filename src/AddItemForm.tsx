import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {IconButton, TextField} from "@material-ui/core";
import {AddBox} from "@material-ui/icons";

export type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export const AddItemForm = React.memo( (props: AddItemFormPropsType) => {
    console.log('called')
    let [title, setTitle] = useState('')
    let [error, setError] = useState<string | null>(null)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (error !== null) {
            setError(null)
        }
        if (e.charCode === 13) {
            addItem()
        }
    }
    const addItem = () => {
        if (title.trim() !== '') {
            props.addItem(title)
            setTitle("")
        } else {
            setError("Title is required")
        }
    }


    return <div>
        <TextField
            variant={'outlined'}
            value={title}
            onChange={onChangeHandler}
            onKeyPress={onKeyPressHandler}
            error={!!error}
            label={"Title"}
            helperText={error}
        />
        <IconButton color={"primary"} onClick={addItem}>
            <AddBox/>
        </IconButton>
        {/*{error && <div className={"error-message"}>{error}</div>}*/}
    </div>


})