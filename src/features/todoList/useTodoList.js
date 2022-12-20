import { useSelector } from "react-redux";
import { selectVisibleTodos } from "../../store/todosSlice";
import TodoListItem from "../todoListItem/TodoListItem";

const useTodoList = () => {
    const activeFilter = useSelector(state => state.filter)
    const todos = useSelector(state => selectVisibleTodos(state, activeFilter));

    const elem = todos.map((todo) => 
        <li key={todo.id}
                className="list-group-item">
                    
            <TodoListItem id={todo.id}
                            todo={todo} />
        </li>
    )
    return [elem];
}

export default useTodoList;