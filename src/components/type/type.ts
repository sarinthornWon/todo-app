export type TodoType = {
    id: string;
    title: string | number;
    completed: boolean;
};

export type SetDatasType = React.Dispatch<React.SetStateAction<TodoType[]>>;

export type SetDataType = React.Dispatch<React.SetStateAction<TodoType | undefined>>;

export type SetErrorType = React.Dispatch<any>

export type TodoContextType = {
    todos: TodoType[];
    updateStatus: (id: string, status: boolean) => void;
    updateTitle: (id: string, title: string|number) => void;
    createTodo: (title: string|number) => void;
    deleteTodo: (id: string) => void;
    filterTodo: (filter: string) => void;
    filter: string;
}

export type TodoStatusType = {
    completed: boolean;
}

export type TodoTitleType = {
    title: string|number;
}

export type CreateTodoType = {
    title: string|number;
    completed: boolean;
}