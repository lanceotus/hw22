import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {reducerSchedule} from './containers/Schedule'
import {reducerScore} from "./containers/Score";
import {createStore} from 'redux';

const initState = {
    /*schedule: [] / *{
        sort_field_number: 0,
        sort_reverse: false
    }*/
}

function reducer (state=initState, action) {
    return {
        schedule: reducerSchedule(state.schedule, action),
        score: reducerScore(state.score, action)
    };
}

let store = createStore(reducer);

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
