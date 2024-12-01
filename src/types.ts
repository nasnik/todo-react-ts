export interface Todo {
    id: number;
    title: string;
}

export interface TodoListProps {
    todoList: Todo[];
}

export interface AddTodoFormProps {
    addTodo: (todo: Todo) => void;
}