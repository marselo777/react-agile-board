import {v4} from 'uuid';

export interface IBoardItem {
    id: number | string;
    boardId: number | string;
    taskType: string;
    tasks: [];
}

export const defaultBoardItem: IBoardItem[] = [];
