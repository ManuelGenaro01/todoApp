import { useState } from "react";

const TodoForm = ({ createTodo }) => {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) {
            return setTitle("");
        }
        createTodo(title);
        setTitle("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="mt-8 flex items-center gap-6 overflow-hidden rounded-md bg-white py-4 px-4 text-xs transition-all duration-700 dark:bg-gray-800"
        >
            <span className="inline-block h-5 w-5 rounded-full border-2"></span>
            <input
                type="text"
                placeholder="Create a new ToDo"
                className="w-full text-gray-400 outline-none transition-all duration-700 dark:bg-gray-800"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
};

export default TodoForm;
