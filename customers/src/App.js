import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './styles/app.scss';
import routes from './router';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

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
        <Header/>
        
        <Switch>
          { showRouteComponent(routes) }
        </Switch>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;
