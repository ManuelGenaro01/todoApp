import Check from "../images/Check";
import Icon from "../images/Icon";

const TodoItems = ({ todo, removeTodo, completeTodo }) => {
    const { id, nombre, completed } = todo;
    return (
        <article className="flex items-center gap-4 border-b border-b-gray-300 py-4 px-4">
            <button
                className={`h-5 w-5 flex-none rounded-full border-2  ${
                    completed
                        ? "flex items-center justify-center rounded-full border-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                        : "inline-block "
                }`}
                onClick={() => {
                    completeTodo(id);
                }}
            >
                {completed && <Check />}
            </button>
            <p
                className={`grow ${
                    completed
                        ? "text-gray-400 line-through"
                        : "text-black transition-all duration-700 dark:text-white"
                }`}
            >
                {nombre}
            </p>
            <button className="flex-none" onClick={() => removeTodo(id)}>
                <Icon />
            </button>
        </article>
    );
};

export default TodoItems;
