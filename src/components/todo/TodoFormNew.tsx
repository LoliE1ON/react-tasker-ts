import React, {useState} from 'react';
import {TextField} from '@material-ui/core';
import {IAddNewTodo} from "./interfaces/AddNewTodo";

export const TodoFormNew: React.FC<IAddNewTodo> = (props) => {

    const [task, setTask] = useState<string>('');
    const changeHendleTask = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value);
    };
    const onPressEnter = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(task);
            setTask('');
        }
    };

    return (
        <TextField
            onChange={changeHendleTask}
            value={task}
            onKeyPress={onPressEnter}
            id="standard-required" label="New task" />
    )
}
