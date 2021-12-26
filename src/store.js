import { configureStore } from '@reduxjs/toolkit';
import { toDosReducer } from './features/todo/todo.reducer';

export default configureStore({
  reducer: {
    toDos: toDosReducer
  }
})