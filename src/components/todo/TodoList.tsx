import React from 'react';
import {ITodoListProps} from "./interfaces/TodoListProps";

export const TodoList: React.FC<ITodoListProps> = ({ todos }) => {
    return(
        <div>
            <h3>List</h3>

            {todos.map((todo, key) => {
                return (
                    <div key={key}>{todo.title}</div>
                );
            })}

        </div>
    );
};
