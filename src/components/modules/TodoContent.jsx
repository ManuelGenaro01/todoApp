import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { useEffect } from "react";
import TodoItems from "./TodoItems";

const TodoContent = ({ todos, removeTodo, completeTodo }) => {
    return (
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
    );
};

export default TodoContent;
