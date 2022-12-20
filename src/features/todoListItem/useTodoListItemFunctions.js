import { useDispatch } from "react-redux";
import { changeTodo, removeTodo, toggleCompletedTodo, toggleImportantTodo } from "../../store/todosSlice";

const useTodoListItemFunctions = () => {

    const dispatch = useDispatch();

    const onDelet = (id) => {
        dispatch(removeTodo(id));
    }

    const onToggleCompletedDone = (id) => {
        dispatch(toggleCompletedTodo(id));
    }

    const onToggleImportant = (id) => {
        dispatch(toggleImportantTodo(id));
    }

    const onChange = (id) => {
        dispatch(changeTodo(id));
    }
    return [onDelet, 
            onToggleCompletedDone, 
            onToggleImportant, 
            onChange
    ];
}

export default useTodoListItemFunctions;