import { DragDropContext } from "@hello-pangea/dnd";
import Header from "./components/modules/Header";
import TodoFilter from "./components/modules/TodoFilter";
import TodoContent from "./components/modules/TodoContent";
import TodoForm from "./components/modules/TodoForm";
import TodoComputed from "./components/modules/TodoComputed";
import { useEffect, useState } from "react";

const todoInitialState = JSON.parse(localStorage.getItem("todos")) || [];

const App = () => {
    const [todos, setTodo] = useState(todoInitialState);
    const handleDragEnd = (result) => {
        if (!result.destination) return;
        const startIndex = result.source.index;
        const endIndex = result.destination.index;

        const copyArray = [...todos];
        const [removeItem] = copyArray.splice(startIndex, 1);
        copyArray.splice(endIndex, 0, removeItem);

        setTodo(copyArray);
    };

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

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
        <div className="min-h-screen bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat transition-all duration-700 dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
            <Header />

            <main className="container mx-auto mt-8 max-w-md px-4">
                <TodoForm createTodo={createTodo} />

                <DragDropContext onDragEnd={handleDragEnd}>
                    <TodoContent
                        todos={filteredTodo()}
                        removeTodo={removeTodo}
                        completeTodo={completeTodo}
                    />
                </DragDropContext>

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
