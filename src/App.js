import React from 'react';
import { connect } from 'react-redux';
import { addGun,removeGun,addGunAsync } from './index.redux'

// import { ReactDOM } from 'react-dom';

export default class App extends React.Component {
    render() {
        const { num,addGun,removeGun,addGunAsync } = this.props;
        return (
            <div>
                <h1>{`现在有机枪${num}把`}</h1>
                <button onClick = {() => {addGun()}}>Add gun</button>
                <button onClick = {() => {removeGun()}}>remove gun</button>
                <button onClick = {() => {addGunAsync()}}>addGunAsync</button>
            </div>
        )
    }
}
const mapStatetoProps = function(state) {
    return { num:state.counter }
}
const actionCreators = { addGun,removeGun,addGunAsync } 
//  connect将state和方法注册到组件props中，在组件中直接通过this.props获得
App = connect(mapStatetoProps,actionCreators)(App)