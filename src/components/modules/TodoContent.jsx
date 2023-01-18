import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import TodoItems from "./TodoItems";

const TodoContent = ({ todos, removeTodo, completeTodo }) => {
    const handleDragEnd = (result) => {
        if (!result.destination) return;
        const startIndex = result.source.index;
        const endIndex = result.destination.index;

        const copyArray = [...todos];
        const [removeItem] = copyArray.splice(startIndex, 1);
        copyArray.splice(endIndex, 0, removeItem);

        todos = copyArray;
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <div className="mt-8 rounded-t-md bg-white text-xs shadow-3xl transition-all duration-700 dark:bg-gray-800">
                <Droppable droppableId="todos">
                    {(droppableProvider) => (
                        <div
                            ref={droppableProvider.innerRef}
                            {...droppableProvider.droppableProps}
                        >
                            {todos.map((todo, index) => (
                                <Draggable
                                    index={index}
                                    draggableId={`${todo.id}`}
                                    key={todo.id}
                                >
                                    {(draggableProvider) => (
                                        <TodoItems
                                            todo={todo}
                                            removeTodo={removeTodo}
                                            completeTodo={completeTodo}
                                            ref={draggableProvider.innerRef}
                                            {...draggableProvider.dragHandleProps}
                                            {...draggableProvider.draggableProps}
                                        />
                                    )}
                                </Draggable>
                            ))}
                            {droppableProvider.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        </DragDropContext>
    );
};

export default TodoContent;
