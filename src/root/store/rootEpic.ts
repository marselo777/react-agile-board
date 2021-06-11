import {combineEpics, Epic} from 'redux-observable';

import {boardEpics} from 'entities/board/boardEpic';

export const rootEpic: Epic<any, any, any, any> = combineEpics(...boardEpics);
