const TodoComputed = ({ computeTodo, clearCompleteTodo }) => {
    return (
        <section className="flex items-center justify-between rounded-b-md bg-white px-4 py-4 text-gray-400 shadow-3xl transition-all duration-700 dark:bg-gray-800">
            <span>{computeTodo} items left</span>
            <button onClick={clearCompleteTodo}>Clear Completed</button>
        </section>
    );
};

export default TodoComputed;
