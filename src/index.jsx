import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {Router, Route, hashHistory} from "react-router"
import {createStore} from "redux";
import todoApp from "./reducers/reducers";
import App from "./components/App";

let store = createStore(todoApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const Root = () => (
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/(:filter)' component={App} />
        </Router>
    </Provider>
);
ReactDOM.render(
    <Root />,
    document.getElementById("root")
);