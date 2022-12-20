import useCounter from "./useCounter";
import "./appCounter.scss";

const AppCounter = () => {
    const [completedTodo, activeTodo] = useCounter()

    return (
        <div className="app-counter">
            <h2>{activeTodo.length} more to do, {completedTodo.length} done</h2>
        </div>
    )
    }

export default AppCounter;
