import { useContext, useEffect, useState } from "react";
import "./Progress.css";
import { TodoContext } from "../context/Context";
import { TodoContextType, TodoType } from "../type/type";

export default function Progress() {
    const [noCompleted, setNoCompleted] = useState<number>(0);
    const [percentCompleted, setPercentCompleted] = useState<number>(0);
    const { todos } = useContext(TodoContext) as TodoContextType;

    useEffect(() => {
        const length = todos.length;
        const completed = todos.filter((todo: TodoType) => todo.completed === true).length;
        setNoCompleted(completed);
        setPercentCompleted((completed/length)*100);
    }, [todos]);

    return (
        <div className="progress-container">
            <div className="progress-header font-size-28">Progress</div>
            <div className="progress-bar">
                <div style={{width: `${percentCompleted}%`}}></div>
            </div>
            <div className="progress-no-completed font-size-16">{noCompleted} completed</div>
        </div>
    );
}