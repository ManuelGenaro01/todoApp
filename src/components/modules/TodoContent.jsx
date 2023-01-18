import TodoItems from "./TodoItems";

const TodoContent = ({ todos, removeTodo, completeTodo }) => {
    return (
        <div className="mt-8 rounded-t-md bg-white text-xs transition-all duration-700 dark:bg-gray-800">
            {todos.map((todo) => (
                <TodoItems
                    key={todo.id}
                    todo={todo}
                    removeTodo={removeTodo}
                    completeTodo={completeTodo}
                />
            ))}
        </div>
    );
};

export default TodoContent;
