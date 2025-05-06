import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../TodoSlice/todosSlice';

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;
