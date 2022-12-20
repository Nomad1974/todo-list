import useTodoList from "./useTodoList";

import "./todoList.scss";


const TodoList = () => {
    const [elem] = useTodoList();

    return ( 
        <ul className="list-group todo-list">
            {elem}
        </ul>
    );
    
}

export default TodoList;