import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../store/filterSlice";

const useFilter = () => {
    const dispatch = useDispatch();
    const activeFilter = useSelector(state => state.filter);
    const handleFilter = (value) => dispatch(setFilter(value));

    return [activeFilter, handleFilter];
}

export default useFilter;