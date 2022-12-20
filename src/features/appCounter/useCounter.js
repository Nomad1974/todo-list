import { useSelector } from "react-redux";
import { selectAllTodos } from "../../store/todosSlice";

const useCounter = () => {
    const todos = useSelector(selectAllTodos);
    const completedTodo = todos.filter(todo => todo.completed);
    const activeTodo = todos.filter(todo => !todo.completed);

    return [completedTodo, activeTodo];
}

export default useCounter;