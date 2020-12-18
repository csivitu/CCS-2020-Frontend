import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import quizReducer from './quiz/quizSlice';

export default configureStore({
    reducer: {
        user: userReducer,
        quiz: quizReducer,
    },
});
