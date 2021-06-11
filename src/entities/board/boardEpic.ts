import {PayloadAction} from '@reduxjs/toolkit';
import {Epic, ofType} from 'redux-observable';
import {map} from 'rxjs/operators';
import {createBoardStart, createBoardSuccess} from './boardSlice';
import {configureDefaultBoardColumns, IBoard} from './models';

const boardEpic: Epic<any, any, any, any> = (action$) =>
    action$.pipe(
        ofType(createBoardStart.type),
        map(({payload}: PayloadAction<Omit<IBoard, 'column'>>) => {
            console.log('asdsad');
            const randomColor = () => {
                const letters = '0123456789ABCDEF';
                let color = '#';
                for (let i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            };
            const columns = configureDefaultBoardColumns(payload.id);
            const board = {
                ...payload,
                columns,
                colorScheme: randomColor(),
            };
            return createBoardSuccess(board);
        }),
    );

export const boardEpics = [boardEpic];
