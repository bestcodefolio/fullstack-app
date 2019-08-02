import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';

import reducer from '../reducers/reducer.js';

const middleware = [ thunk ];

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const Store = createStore(
    persistedReducer,
    applyMiddleware(...middleware)
);

export const Persistor = persistStore(Store);
