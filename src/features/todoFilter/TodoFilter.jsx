import useFilter from "./useFilter";

import "./todoFilter.scss";

const TodoFilter = () => {
    const [activeFilter, handleFilter] = useFilter();

    const className = 'btn btn-primary';
    const clazzName = 'btn btn-outline-secondary';
    
    return (  
        <div className='btn-group'>
            <button 
                type="button"
                className={activeFilter === 'all' ? className : clazzName}
                onClick={() => handleFilter('all')}>
                    All
            </button>
            <button
                type="button" 
                className={activeFilter === 'active' ? className : clazzName}
                onClick={() => handleFilter('active')}>
                    Active
            </button>
            <button
                type="button" 
                className={activeFilter === 'completed' ? className : clazzName}
                onClick={() => handleFilter('completed')}>
                    Done
            </button>
        </div>
    );
}

export default TodoFilter;