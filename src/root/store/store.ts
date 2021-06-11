import {configureStore} from '@reduxjs/toolkit';
import {createEpicMiddleware, EpicMiddleware} from 'redux-observable';
import {rootEpic} from './rootEpic';
import rootReducer from './rootReducer';
import {persistStore} from 'redux-persist';

const epicMiddleware: EpicMiddleware<any> = createEpicMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: [epicMiddleware],
});

export const persistor = persistStore(store);

epicMiddleware.run(rootEpic);
