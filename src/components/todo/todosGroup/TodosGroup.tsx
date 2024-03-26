import "./TodosGroup.css";
import NewTodo from "../newTodo/NewTodo";
import TodoItem from "../todoItem/TodoItem";
import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../../context/Context";
import { TodoContextType, TodoType } from "../../type/type";

export default function TodosGroup() {
    const { todos, filter } = useContext(TodoContext) as TodoContextType;
    const [filterTodo, setFilterTodo] = useState<TodoType[]>(todos);

    useEffect(() => {
        if(filter === "All") {
            setFilterTodo(todos);
        } else if(filter === "Done") {
            setFilterTodo(todos.filter((todo: TodoType) => todo.completed));
        } else if(filter === "Undone") {
            setFilterTodo(todos.filter((todo: TodoType) => !todo.completed));
        }
    }, [filter, todos]);

    return (
        <>
            {filterTodo.map((todo) => 
                <TodoItem todo={todo} key={todo.id}/> 
            )}
            <NewTodo />
        </>
    );
}