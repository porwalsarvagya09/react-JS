import  { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducer,
    devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools only in development  
})