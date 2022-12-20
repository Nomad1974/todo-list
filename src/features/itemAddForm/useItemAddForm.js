import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todosSlice";

const useItemAddForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addTodo(event.target.title.value));
        event.target.reset();
    }
    return [handleSubmit];
}

export default useItemAddForm;