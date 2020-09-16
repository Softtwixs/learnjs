type TypeTodoElementID = (id:string)=> string;
type TypeTodoList = (todos: [TypeResponseTodo]) => string;
interface TypeResponseTodo {
    text: string,
    id: string,
    isCompleted: boolean
};
type TypeventWithTodo = (todoId?:string) => void;