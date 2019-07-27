import React from 'react';
import { connect } from 'react-redux';
import { Link,Route,Redirect } from 'react-router-dom';
import App from './App';
import { Login,Logout } from './Auth.redux';

function Erying() {
    return <div>二营</div>
}
function Qibinglian() {
    return (<div>骑兵连</div>)
}

export default class Dashboard extends React.Component {
    render() {
        console.log(this.props);
        const redirectToLogin = <Redirect to='/login'></Redirect>
        const app =  (
            <div>
                <h1>独立团</h1>
                <button onClick={()=>{this.props.Logout()}}>注销</button>
                <ul>
                    <li>
                        <Link to='/dashboard'>一营</Link>
                    </li>
                    <li>
                        <Link to='/dashboard/erying'>二营</Link>
                    </li>
                    <li>
                        <Link to='/dashboard/qibinglian'>骑兵连</Link>
                    </li>
                </ul>
                {/* Switch只渲染一个子组件 */}
                <Route path='/dashboard' exact component={App}></Route>
                <Route path='/dashboard/erying' component={Erying}></Route>
                <Route path='/dashboard/qibinglian' component={Qibinglian}></Route>
                {/* <Route path='/:loaction' component={Test}></Route> */}
                <Redirect to='/dashboard'></Redirect>
            </div>
        )
        return this.props.isAuth ? app : redirectToLogin
    }
}

const mapStatetoProps = function(state) {
    return {
        isAuth: state.auth.isAuth,
        user: state.auth.user
    }
}

const actionCreators = { Login, Logout };
Dashboard = connect(mapStatetoProps,actionCreators)(Dashboard);
