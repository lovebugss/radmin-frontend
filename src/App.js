import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Layout} from 'antd';
import {connect} from 'react-redux';
import Loading from './components/load';
import Home from './containers/home';
import Login from './containers/login';


class App extends Component {

    render() {
        let {isFetching} = this.props;
        return (

            <Router>
                <Layout className="layout">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/login" component={Login}/>
                    </Switch>
                    {isFetching && <Loading/>}

                </Layout>
            </Router>
        )
    }
}

function mapStateToProps(state) {
    return {
        isFetching: state.app.isFetching
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
