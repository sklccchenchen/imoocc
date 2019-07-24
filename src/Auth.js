import React from 'react';
import { connect } from 'react-redux';
import { Login, Logout } from './Auth.redux';
import { Redirect } from 'react-router-dom'

export default class Auth extends React.Component {
    render() {
        return (
            <div>
                {this.props.isAuth ? <Redirect to='/dashboard' /> : null}
                <h2>Auth Page...您当前处于未登录状态，请先登录。。</h2>
                <button onClick = {() => this.props.Login()}>登录</button>
            </div>
        )
    }
}
const mapStatetoProps = function(state) {
    return {
        isAuth: state.auth.isAuth,
        user: state.auth.user
    }
}

const actionCreators = {
    Login,
    Logout
}

Auth = connect(mapStatetoProps,actionCreators)(Auth)