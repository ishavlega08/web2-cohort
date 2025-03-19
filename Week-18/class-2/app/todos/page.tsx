import axios from "axios"

async function getTodos() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
    return response.data;
}

export default async function Todos() {

    const todos = await getTodos();

    return (
        <div>
            {todos.map((todo: ITodo) => <Todo title={todo.title} completed={todo.completed} />)}
        </div>
    )
}

interface ITodo {
    title: string;
    completed: boolean;
}

function Todo({ title, completed }: ITodo ) {
    return (
        <div className="mt-2">
            {title} {completed ? "Done!" : "Not Done"};
        </div>
    )
}