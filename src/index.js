import React from 'react';
import ReactDOM  from 'react-dom';
import { createStore,applyMiddleware,compose } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';
// import App from './App.js';
import reducers from './reducers'
// import { counter } from './index.redux';
import  Auth  from './Auth'
import Dashboard from './Dashboard'


const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f 
));

// console.log(store.getState());
// function Erying() {
//     return <div>二营</div>
// }
// function Qibinglian() {
//     return (<div>骑兵连</div>)
// }
// function Test(props) {
//     console.log(this.props);
//     return (<h2>测试组件</h2>)
// }
// class Test extends React.Component {
//     render() {
//         console.log(this.props);
//         return <h2>测试组件{this.props.location.pathname}</h2>
//     }
// }

// ReactDOM.render(
//     <Provider store={ store }>
//         <BrowserRouter>
//             <ul>
//                 <li>
//                     <Link to='/'>一营</Link>
//                 </li>
//                 <li>
//                     <Link to='/erying'>二营</Link>
//                 </li>
//                 <li>
//                     <Link to='/qibinglian'>骑兵连</Link>
//                 </li>
//             </ul>
            // <Switch>
            //     {/* 只渲染命中的第一个组件 */}
            //     <Route path='/' exact component={App}></Route>
            //     {/* <Route path='/:location' component={Test}></Route> */}
            //     <Route path='/erying' component={Erying}></Route>
            //     <Route path='/qibinglian' component={Qibinglian}></Route>
            //     <Route path='/:loaction' component={Test}></Route>
            //     <Redirect to='/qibinglian'></Redirect>
            // </Switch>
//         </BrowserRouter>
//     </Provider>,
// document.getElementById("root"));

ReactDOM.render(
    <Provider store = { store }>
        <BrowserRouter>
            <Switch>
                {/* index中只放两个路由，login和dashboard分别跳认证和dashboard页面，dashboard页面逻辑在Dashboard中去实现 */}
                <Route path='/login' component={Auth}></Route>
                <Route path='/dashboard' component={Dashboard}></Route>
                <Redirect to='/dashboard'></Redirect>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)


