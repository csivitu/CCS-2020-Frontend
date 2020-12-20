import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import quizReducer from './quiz/quizSlice';
import slotReducer from './slot/slotslice';

export default configureStore({
    reducer: {
        user: userReducer,
        quiz: quizReducer,
        slot: slotReducer,
    },
});
