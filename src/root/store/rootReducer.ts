import {combineReducers} from 'redux';

import boardsReducer from 'entities/board/boardSlice';
import boardsItemsReducer from 'entities/boardItem/boardItemSlice';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const config = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    entities: combineReducers({
        boards: boardsReducer,
        boardsItems: boardsItemsReducer,
    }),
});

export type RootState = ReturnType<typeof rootReducer>;

export default persistReducer(config, rootReducer);
