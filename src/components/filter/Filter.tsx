import { useContext, useEffect, useState } from "react";
import "./Filter.css";
import { TodoContext } from "../context/Context";
import { TodoContextType } from "../type/type";
import HandleClickOutside from "../handleClickOutside/HandleClickOutside";

export default function Filter() {
    const filters = [
        "All",
        "Done",
        "Undone",
    ];

    const [filter, setFilter] = useState<string>("All");
    const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);
    const { filterTodo } = useContext(TodoContext) as TodoContextType;

    const ref = HandleClickOutside(() => setIsOpenDropdown(false));

    const DropdwonHadler = (e: string) => {
        setFilter(e);
        setIsOpenDropdown(false);
    }

    useEffect(() => {
        filterTodo(filter);
    }, [filter, filterTodo]);

    return (
        <div className="select-custom font-size-16">
            <div ref={ref}>
                <button
                    className="select-button"
                    onClick={() => setIsOpenDropdown(!isOpenDropdown)}
                >
                    <div className="selected-value">{filter}</div>
                    <div className={`arrow-${isOpenDropdown ? "up" : "down"}`}></div>
                </button>
                <ul className={`select-dropdown display-${isOpenDropdown}`}>
                    {
                        filters.map(item =>
                            <li key={item} onClick={() => DropdwonHadler(item)}>
                                <div>{item}</div>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
}