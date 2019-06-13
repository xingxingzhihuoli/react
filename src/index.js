import React from "react";
import ReactDOM from "react-dom";
import App from './container/App';
import {HashRouter as Router, Route, Switch,Redirect} from 'react-router-dom'
import Home from './container/Home/Home';
import Lesson from './container/Lesson/Lesson';
import Login from './container/Login/Login';
import Profile from './container/Profile/Profile';
import Register from './container/Register/Register';
import {Provider} from 'react-redux';
import store from './store/index'
ReactDOM.render(
    <Provider store={store}>
    <Router>
        <App>
            <Switch>
                <Route path='/' exact render={()=>(<Redirect to='/home'/>)}/>
                <Route path='/home' component={Home}/>
                <Route path='/lesson' component={Lesson}/>
                <Route path='/login' component={Login}/>
                <Route path='/profile' component={Profile}/>
                <Route path='/register' component={Register}/>
            </Switch>
        </App>
    </Router>
    </Provider>,
    document.querySelector("#root")
);
