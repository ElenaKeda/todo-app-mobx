export interface ITodo {
    title: string,
    id: string,
    completed: boolean
}

export interface IService {
    createTodo(title:string): void,
    deleteTodo(todo:ITodo): void,
    completeTodo(todo:ITodo): void,
    editTodo(todo:ITodo, value:string): void
}
