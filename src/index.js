import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import game from './reducers/index';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
// import * from serviceWorker from './serviceWorker';
import Container from './container/Container';
import "./components/_main.scss";

export const store = createStore(
    game,
    applyMiddleware(thunk)
)

const App = () => (
    <Provider store={store}>
        <Container/>
    </Provider>
)

ReactDOM.render(<App/>, document.getElementById("index"));

// serviceWorker.register();