import {App} from './App';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './root/store';
import {ThemeProvider} from 'styled-components';
import {theme} from './theme';
import {GlobalStyles} from './components/GlobalStyle';

const Root = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <App />
            </ThemeProvider>
        </Provider>
    );
};

ReactDOM.render(<Root />, document.getElementById('react-app'));
