import axios from "axios";

export default async function TodoPage({ params }: {
    params: {
        todoId: string
    }
}) {
    const todoId = (await params).todoId;

    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${todoId}`);
    const data = response.data;

    return <div>
        Todo {todoId}

        <div className="mt-4">
            Title - {data.title}
            <br />
            Body - {data.body}
        </div>
    </div>
}