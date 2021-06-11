import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {defaultBoards} from 'entities/board/models';

const boardItemsSlice = createSlice({
    name: 'entities/boardItem',
    initialState: defaultBoards,
    reducers: {
        boardItemsInit: (state, {payload}: PayloadAction<number>) => {},
        boardConfigureInitItems: (state, {payload}) => {
            return payload;
        },
    },
});

export const {boardItemsInit, boardConfigureInitItems} =
    boardItemsSlice.actions;

export default boardItemsSlice.reducer;
