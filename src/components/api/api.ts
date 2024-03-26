import axios, { AxiosRequestConfig } from "axios";
import { CreateTodoType, SetDatasType, SetErrorType, TodoStatusType, TodoTitleType, TodoType } from "../type/type";

const config: AxiosRequestConfig = {
    headers: {
        "Content-Type": "application/json"
    }
}

let res_data!: TodoType, res_error!: string;

export async function GetTodos(setData: SetDatasType, setError: SetErrorType) {
    await axios.get<TodoType[]>(`${process.env.REACT_APP_API}/todos`, config)
    .then(({data} : {data: TodoType[]}) => setData(data))
    .catch(({message}: {message: string}) => setError(message));
}

export async function CreateTodo(data: CreateTodoType) {
    await axios.post(`${process.env.REACT_APP_API}/todos`, data, config)
    .then(({data} : {data: TodoType}) => res_data = data)
    .catch(({message}: {message: string}) => res_error = message);
    return {res_data, res_error};
}

export async function UpdateStatusTodo(data: TodoStatusType, id: string) {
    await axios.patch(`${process.env.REACT_APP_API}/todos/${id}`, data, config)
    .then(({data} : {data: TodoType}) => res_data = data)
    .catch(({message}: {message: string}) => res_error = message);
    return {res_data, res_error};
}

export async function UpdateTitleTodo(data: TodoTitleType, id: string) {
    await axios.patch(`${process.env.REACT_APP_API}/todos/${id}`, data, config)
    .then(({data} : {data: TodoType}) => res_data = data)
    .catch(({message}: {message: string}) => res_error = message);
    return {res_data, res_error};
}

export async function DeleteTodo(id: string) {
    await axios.delete(`${process.env.REACT_APP_API}/todos/${id}`, config)
    .then(({data} : {data: TodoType}) => res_data = data)
    .catch(({message}: {message: string}) => res_error = message);
    return {res_data, res_error};
}