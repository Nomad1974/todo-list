import { useDispatch } from "react-redux";

import { updateTodo } from "../../store/todosSlice";

const useInput = () => {
    const dispatch = useDispatch();

    const  handleChange = (event) => {
        dispatch(updateTodo({id: event.target.id, title: event.target.value}))
    };

    return [handleChange]
}
export default useInput;