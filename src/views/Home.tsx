import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Container} from '@material-ui/core';
import {TodoFormNew} from "../components/todo/TodoFormNew";
import {TodoList} from "../components/todo/TodoList";
import {ITodo} from "../components/todo/interfaces/Todo";

export const Home: React.FC = () => {

    const [todos, addTodo] = useState<ITodo[]>([]);

    const addTodoHandle = (title: string) => {
        const newTodo: ITodo = {
            title,
            date: Date.now()
        };
        addTodo([newTodo, ...todos]);
    };

    return (
        <div className="pt1">
            <CssBaseline />
            <Container maxWidth="sm">
                <TodoFormNew onAdd={addTodoHandle}/>
                <TodoList todos={todos}/>
            </Container>
        </div>
    )
}
