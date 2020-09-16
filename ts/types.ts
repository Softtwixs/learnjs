export type TypeTodoElementID = (id:string)=> string;

export type TypeTodoList = (todos: [TypeResponseTodo]) => string;

export interface TypeResponseTodo {
    text: string,
    id: string,
    isCompleted: boolean
};

export type TypeEventWithTodo = (todoId?:string) => void;