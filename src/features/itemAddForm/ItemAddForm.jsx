import useItemAddForm from "./useItemAddForm";

import "./ItemAddForm.scss"

const ItemAddForm = () => {
    const [handleSubmit] = useItemAddForm();

    return (  
        <form className="item-add-form d-flex"
                onSubmit={handleSubmit}>
            <input type="text"
            name="title"
                className="form-control"
                placeholder="What need to be done"  
            />
            <button 
                    className="btn btn-outline-secondary">
                    Add Item
            </button>
        </form>
    );
}

export default ItemAddForm;