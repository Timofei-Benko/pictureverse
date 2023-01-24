// TODO: consider removing redux and use context
import { applyMiddleware, createStore, compose } from 'redux';
import { rootReducer } from './reducers/rootReducer';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

let composeEnhancer = compose;
if (typeof window !== 'undefined') {
    composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export type TRootState = ReturnType<typeof store.getState>;

export const store = createStore(rootReducer, composeEnhancer());
