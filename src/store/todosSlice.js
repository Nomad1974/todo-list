import { createSlice, nanoid } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: {
            reducer: (state, action) => {
                state.push(action.payload)
            },
            prepare: (title) => ({
                payload: {
                    title,
                    id: nanoid(),
                    completed: false,
                    important: false,
                    change: false,
                }
            })
        },
        removeTodo: (state, action) => {
            const id = action.payload;
            return state.filter(todo => todo.id !== id);
        },
        toggleCompletedTodo: (state, action) => {
            helper(state,action).completed = !helper(state,action).completed;
        },
        toggleImportantTodo: (state,action) => {
            helper(state,action).important = !helper(state,action).important;
        },
        changeTodo: (state, action) => {
            helper(state,action).change = !helper(state,action).change;
            
        },
        updateTodo: (state, action) => {
            const id = action.payload.id;
            const todo = state.find(todo => todo.id === id);
            todo.title = action.payload.title;
        }
    }
});

const helper = (state, action) => {
    const id = action.payload;
    const todo = state.find(todo => todo.id === id);
    return todo;
}

export const {
    addTodo, 
    removeTodo, 
    toggleCompletedTodo, 
    toggleImportantTodo, 
    changeTodo,
    updateTodo
} = todoSlice.actions;

export const todoReducer = todoSlice.reducer;

// selectors
export const selectAllTodos = (state) => state.todos;

export const selectVisibleTodos = (state, filter) => {
    switch (filter) {
        case 'all': {
            return state.todos;
        }
        case 'active': {
            return state.todos.filter(todo => !todo.completed);
        }
        case 'completed': {
            return state.todos.filter(todo => todo.completed);
        }
        default: {
            return state.todos;
        }
    }
}