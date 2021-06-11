import {IBoardItem} from 'entities/boardItem/models';
import {v4} from 'uuid';

export interface IBoard {
    title: string;
    id: number | string;
    columns: IBoardColumn[];
    colorScheme?: string;
}

export interface IBoardColumn {
    id: number | string;
    boardId: number | string;
    items: IBoardItem[];
    name: string;
}

export const defaultBoards: IBoard[] = [];

export const configureDefaultBoardColumns = (
    boardId: number | string,
): IBoardColumn[] => {
    return [
        {
            id: v4(),
            boardId,
            name: 'Needs Works',
            items: [],
        },
        {
            id: v4(),
            boardId,
            name: 'inProgress',
            items: [],
        },
        {
            id: v4(),
            boardId,
            name: 'Done',
            items: [],
        },
    ];
};
