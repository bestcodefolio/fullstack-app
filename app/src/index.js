import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Store, Persistor } from './redux/store/store.js';
import App from './App.js';

ReactDOM.render(
    <Provider store={Store}>
        <PersistGate loading={null} persistor={Persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

