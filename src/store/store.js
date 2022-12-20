import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { todoReducer } from './todosSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer,
    filter: filterReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
