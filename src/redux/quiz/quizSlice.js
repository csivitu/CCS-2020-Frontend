import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
    sendResponses,
    startQuiz,
    // endQuiz,
} from '../../api/requests';

export const sendResponsesAsync = createAsyncThunk(
    'quiz/saveAnswers',
    sendResponses,
);

export const startQuizAsync = createAsyncThunk('quiz/startQuiz', startQuiz);

export const quizSlice = createSlice({
    name: 'quiz',
    initialState: {
        questions: undefined,
        timeStarted: undefined,
        timeEnded: undefined,
        currentQuestion: 1,
        answer: '',
        savedStatus: true,
        isLoading: true,
        timeRemaining: undefined,
        errorMsg: undefined,
        domainInProg: undefined,
    },
    extraReducers: {
        [sendResponsesAsync.fulfilled]: (state, action) => {
            if (action.error) return;
            if (action.payload.status) {
                state.savedStatus = true;
            }
        },
        [startQuizAsync.fulfilled]: (state, action) => {
            if (!action.payload.success) {
                state.errorMsg = action.payload.message;
                state.domainInProg = action.payload.domain;
                state.isLoading = false;
            } else {
                const timerStarted = new Date(
                    action.payload.time.timeStarted,
                ).getTime();
                const timeEnded = new Date(
                    action.payload.time.timeEnded,
                ).getTime();
                const timeRemaining = timeEnded - Date.now();
                state.questions = action.payload.responses;
                state.domainInProg = action.payload.domain;
                state.timeStarted = timerStarted;
                state.timeEnded = timeEnded;
                state.timeRemaining = timeRemaining;
                state.isLoading = false;
            }
        },
    },
    reducers: {
        updateQuestionState: (state, action) => {
            const currentQuestion = action.payload;
            if (currentQuestion < 1 || currentQuestion > 10) return;

            if (!state.questions) return;
            const initialContent = state.questions[currentQuestion - 1].response;

            if (initialContent) {
                state.answer = initialContent;
                state.currentQuestion = currentQuestion;
            } else {
                state.answer = '';
                state.currentQuestion = currentQuestion;
            }
        },
        updateAnswer: (state, action) => {
            state.answer = action.payload;
        },
        updateSavedStatus: (state, action) => {
            state.savedStatus = action.payload;
        },
        updateQuestionAnswer: (state, action) => {
            // state.questions[action.payload.currentQuestion - 1] = action.payload.answer;
            const { questions } = state;
            console.log(action.payload.currentQuestion);
            questions[action.payload.currentQuestion - 1].response = action.payload.answer;
            state.questions = questions;
        },
    },
});

export const {
    updateQuestionState,
    updateAnswer,
    updateSavedStatus,
    updateQuestionAnswer,
} = quizSlice.actions;

export default quizSlice.reducer;
