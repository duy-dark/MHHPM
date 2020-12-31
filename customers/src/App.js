import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './styles/app.scss';
import routes from './router';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    const showRouteComponent = (routes) => {
      let result = null;
      if (routes.length > 0) {
        result = routes.map((route, index) => {
          return (
            <Route key={index} path={route.path} exact={route.exact} component={route.component}/>
          );
        });
      }
      return result;
    }

    return (
      <div className="App">
        <Router>
          {this.props.header && <Header/>}
          <Switch>
            { showRouteComponent(routes) }
          </Switch>
          {this.props.footer && <Footer/>}
        </Router>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
  header: !!state.users.header,
  footer: !!state.users.footer
}};
export default connect(mapStateToProps)(App);
