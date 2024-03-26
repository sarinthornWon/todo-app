import { useContext, useState } from "react";
import HandleClickOutside from "../../handleClickOutside/HandleClickOutside";
import TodoTemplate from "../todoTemplate/TodoTemplate";
import "./NewTodo.css";
import { TodoContext } from "../../context/Context";
import { TodoContextType } from "../../type/type";

export default function NewTodo() {
    const [todoTitle, setTodoTitle] = useState<string | number>("");
    const [isEnterTodo, setIsEnterTodo] = useState<boolean>(false);
    const { createTodo } = useContext(TodoContext) as TodoContextType;

    const ref = HandleClickOutside(() => {
        if(todoTitle !== "") {
            setIsEnterTodo(true);
            createTodo(todoTitle);
        }
    });

    const pressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setIsEnterTodo(true);
            createTodo(todoTitle);
        }
    }

    return (
        <>
            {
                !isEnterTodo ?
                    <TodoTemplate>
                        <input type="text" className="font-size-16" placeholder="Add your todo..." ref={ref} value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} onKeyDown={(e) => pressHandler(e)}/>
                    </TodoTemplate>
                     : <NewTodo/>
            }
        </>
    );
}