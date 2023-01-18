import Header from "./components/modules/Header";
import TodoFilter from "./components/modules/TodoFilter";
import TodoContent from "./components/modules/TodoContent";
import TodoForm from "./components/modules/TodoForm";
import TodoComputed from "./components/modules/TodoComputed";
import { useState } from "react";

const TodoInitialState = [
    {
        id: 1,
        nombre: "Complete online JavaScript course",
        completed: true,
    },
    {
        id: 2,
        nombre: "Job around the park 3x",
        completed: false,
    },
    {
        id: 3,
        nombre: "10 Minutes Meditation",
        completed: true,
    },
    {
        id: 4,
        nombre: "Read for 1 hour",
        completed: false,
    },
];

const App = () => {
    const [todos, setTodo] = useState(TodoInitialState);

    const createTodo = (nombre) => {
        const newItem = {
            id: todos.length + 1,
            nombre,
            completed: false,
        };
        setTodo([...todos, newItem]);
    };
    const removeTodo = (id) => {
        setTodo(todos.filter((todo) => todo.id !== id));
    };
    const completeTodo = (id) => {
        setTodo(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };
    const computeTodo = todos.filter((todo) => !todo.completed).length;
    const clearCompleteTodo = () => {
        setTodo(todos.filter((todo) => !todo.completed));
    };

    const [filter, setFilter] = useState("all");

    const changeFilter = (filter) => setFilter(filter);

    const filteredTodo = () => {
        switch (filter) {
            case "all":
                return todos;
            case "active":
                return todos.filter((todo) => !todo.completed);
            case "completed":
                return todos.filter((todo) => todo.completed);
            default:
                return todos;
        }
    };

    return (
        <div className="min-h-screen bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat transition-all duration-700 dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]">
            <Header />

            <main className="container mx-auto mt-8 px-4">
                <TodoForm createTodo={createTodo} />

                <TodoContent
                    todos={filteredTodo()}
                    removeTodo={removeTodo}
                    completeTodo={completeTodo}
                />

                <TodoComputed
                    computeTodo={computeTodo}
                    clearCompleteTodo={clearCompleteTodo}
                />

                <TodoFilter changeFilter={changeFilter} filter={filter} />
            </main>

            <section className="mt-8 text-center text-gray-400">
                Drag and drop to reorder list
            </section>
        </div>
    );
};

export default App;
