import React from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import {GlobalStyles} from './components';
import {persistor, store} from './root';
import {Routes} from './routes';
import {theme} from './theme';
import {PersistGate} from 'redux-persist/integration/react';

export const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <GlobalStyles />
                    <Routes />
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
};
