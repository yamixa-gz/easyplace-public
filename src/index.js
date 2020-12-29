import React from 'react'
import './index.css'
import * as serviceWorker from './serviceWorker'
import ReactDOM from 'react-dom'
import {BrowserRouter, HashRouter} from 'react-router-dom'
import App from './App'
import {Provider} from 'react-redux'
import store from './redux/redux-store'

window.store = store
    ReactDOM.render(
  //      <BrowserRouter>
        <HashRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </HashRouter>,
 //       </BrowserRouter>,
        document.getElementById('root')
    );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

serviceWorker.unregister();
