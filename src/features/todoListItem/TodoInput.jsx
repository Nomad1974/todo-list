import useInput from "./useInput";

const TodoInput = ({todoTitle, id}) => {
    const [handleChange] = useInput();

    return (
        <>
            <input id={id}
                    maxLength="24"
                    type="text" 
                    className="input" 
                    defaultValue={todoTitle} 
                    onChange={handleChange}/>
        </>
    );
}
export default TodoInput;