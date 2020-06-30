import { createStore } from 'redux';
import reducer from './reducer.js'

// check or creates persisted Storage
const persistedState = localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState')) : localStorage.setItem('reduxState', '')

const store = createStore(
    reducer, persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// subscribes persisted storage to the global redux store
store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

export default store;