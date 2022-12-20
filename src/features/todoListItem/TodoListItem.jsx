import useTodoListItemFunctions from "./useTodoListItemFunctions";
import TodoInput from "./TodoInput";

import "./todoListItem.scss";

const TodoListItem = ({todo}) => {
    const {id, title, value, change, important, completed} = todo;
    
    const [onDelet,
            onToggleCompletedDone,
            onToggleImportant,
            onChange
    ] = useTodoListItemFunctions();

    let className = 'todo-list-item';

    return ( 
        <span className={`${className} ${completed ? "done" : ""} ${important ? "important" : ""}`}>  
                {change ? <TodoInput id={id} 
                                    todoTitle={title} 
                                    todoValue={value}/> : (
                            <span className="todo-list-item-label"
                                    onClick={() => onToggleCompletedDone(id)}>
                                {title}
                            </span>
                )}
                <button 
                    type="button"
                    className="btn btn-outline-success float-end"
                    onClick={() => onToggleImportant(id)}>
                        <i className="fa fa-exclamation" />
                </button>
                <button 
                    type="button"
                    className="btn btn-outline-danger float-end"
                    onClick={() => onDelet(id)}>
                        <i className="fa-sharp fa-solid fa-trash-can fa-fw"></i>
                </button>
                <button 
                    type="button"
                    className="btn btn-outline-primary float-end"
                    onClick={() => onChange(id)}>
                        <i className="fa-sharp fa-solid fa-pen-nib fa-fw" />
                </button>
        </span>
    );
}

export default TodoListItem;