import "./TodoItem.css";
import React, { useContext, useState } from "react";
import TodoTemplate from "../todoTemplate/TodoTemplate";
import dot from "../../../assets/dot.svg";
import HandleClickOutside from "../../handleClickOutside/HandleClickOutside";
import { TodoContextType, TodoType } from "../../type/type";
import { TodoContext } from "../../context/Context";

export default function TodoItem({ todo }: {todo: TodoType}) {
    const [isDisplayPopover, setIsDisplayPopover] = useState<boolean>(false);
    const [itemAction, setItemAction] = useState<"default" | "edit">("default");
    const [todoTitle, setTodoTitle] = useState<string|number>(todo.title);
    const [isTodoCompleted, setIsTodoCompleted] = useState<boolean>(todo.completed);
    const ref = HandleClickOutside(() => setIsDisplayPopover(false));
    const { updateStatus, updateTitle, deleteTodo } = useContext(TodoContext) as TodoContextType;

    const CompletedHandle = () => {
        setIsTodoCompleted(!isTodoCompleted);
        updateStatus(todo.id, !isTodoCompleted);
    };

    const SaveButtonHandle = () => {
        setItemAction("default");
        updateTitle(todo.id, todoTitle);
    };

    const DeleteHandler = () => {
        deleteTodo(todo.id);
    }

    return (
        <TodoTemplate>
            <div className="item-section-left font-size-16">
                {
                    itemAction === "default" ?
                        <>
                            <input type="checkbox" checked={isTodoCompleted} onChange={CompletedHandle} />
                            <div className="title-container">{todoTitle}</div>
                        </> :
                        <input type="text" className="font-size-16" value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} />
                }
            </div>
            <div className="item-section-right" ref={ref}>
                {
                    itemAction === "default" ?
                        <>
                            <img src={dot} alt="dot" onClick={() => setIsDisplayPopover(!isDisplayPopover)} />
                            <div className={`item-popover font-size-14 display-${isDisplayPopover}`}>
                                <div onClick={() => { setItemAction("edit"); setIsDisplayPopover(false); }}>Edit</div>
                                <div onClick={DeleteHandler}>Delete</div>
                            </div>
                        </> :
                        <button onClick={SaveButtonHandle}>Save</button>
                }
            </div>
        </TodoTemplate>
    );
}