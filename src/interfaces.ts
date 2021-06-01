export interface ITodo {
    title: string,
    id: string,
    completed: boolean
}

export interface IService {
    todos: ITodo[],
    createTodo(title:string): void,
    deleteTodo(todo:ITodo): void,
    completeTodo(todo:ITodo): void,
    editTodo(todo:ITodo, value:string): void
}

export interface IStorageService {
    getStorage(todoKey:string): ITodo[] | [],
    saveStorage(todoKey: string, todos:ITodo[]): void,
    removeStorage(todoKey: string): void
}
