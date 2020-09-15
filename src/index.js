import React from 'react';
import { applyMiddleware, createStore, compose } from "redux";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import reducers from "./reducers";
import "./assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-dashboard-react.scss";
import HomePage from "./views/Pages/HomePage";
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const store = createStore(
    reducers, compose(applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path={"/"} render={props => <HomePage {...props}/>} />
            </Switch>
            {/* <App /> */}
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
