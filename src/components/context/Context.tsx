import React, { createContext, useEffect, useState } from "react";
import { TodoContextType, TodoType } from "../type/type";
import { CreateTodo, DeleteTodo, GetTodos, UpdateStatusTodo, UpdateTitleTodo } from "../api/api";

export const TodoContext = createContext<TodoContextType | null>(null);

export default function Context({ children }: { children: React.ReactNode }) {
    const [todos, setTodos] = useState<TodoType[]>([]);
    const [error, setError] = useState<any>(null);
    const [filter, setFilter] = useState<string>("All");

    useEffect(() => {
        GetTodos(setTodos, setError);
    }, []);

    const updateStatus = async (id: string, status: boolean) => {
        const response = await UpdateStatusTodo({
            completed: status
        }, id);
        todos.filter((todo: TodoType) => {
            if (todo.id === id) {
                todo.completed = status;
                setTodos([...todos]);
            }
            return false;
        });
        setError(response.res_error);
    }

    const updateTitle = async (id: string, title: string | number) => {
        const response = await UpdateTitleTodo({
            title: title
        }, id);
        todos.filter((todo: TodoType) => {
            if (todo.id === id) {
                todo.title = title;
                setTodos([...todos]);
            }
            return false;
        });
        setError(response.res_error);
    };

    const createTodo = async (title: string | number) => {
        const response = await CreateTodo({
            title: title,
            completed: false
        });
        setError(response.res_error);
        setTodos([...todos, response.res_data]);
    };

    const deleteTodo = async (id: string) => {
        const response = await DeleteTodo(id);
        const filterTodos = todos.filter((todo: TodoType) => todo.id !== id);
        setError(response.res_error);
        setTodos(filterTodos);
    };

    const filterTodo = (data: string) => {
        setFilter(data);
    };

    return (
        <TodoContext.Provider value={{ todos, updateStatus, updateTitle, createTodo, deleteTodo, filterTodo, filter }}>
            {error == null || undefined ?
                children :
                <h1>{error}</h1>
            }
        </TodoContext.Provider>
    );
}