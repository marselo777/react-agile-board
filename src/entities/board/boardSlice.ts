import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {defaultBoards, IBoard} from './models';

const boardSlice = createSlice({
    name: 'entities/boardSlice',
    initialState: defaultBoards,
    reducers: {
        createBoardStart: (
            state,
            {payload}: PayloadAction<{id: string | number; title: string}>,
        ) => {},
        createBoardSuccess: (state, {payload}: PayloadAction<IBoard>) => {
            state.push(payload);
        },
    },
});

export const {createBoardStart, createBoardSuccess} = boardSlice.actions;

export default boardSlice.reducer;
