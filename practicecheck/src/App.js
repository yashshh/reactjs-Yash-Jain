//import './App.css';
import Login from './Components/Login'
import ErrorPage from './Components/ErrorPage'
import CompanyListComponent from './Components/CompanyListComponent'
import LogoutComponent from './Components/LogoutComponent'
import PerformanceComponent from './Components/PerformanceComponent'
import WatchListComponent from './Components/WatchListComponent'
import MenuComponent from './Components/MenuComponent'
import FooterComponent from './Components/FooterComponent'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import AuthenticatedRoute from './Components/AuthenticatedRoute'

function App() {
  return (
      <div className="App">
        <Router>
          <div>
            <MenuComponent></MenuComponent>
            <Switch>
              <Route path = "/" exact component={Login}/>
              <Route path = "/login" exact component={Login}/>
              <Route path = "/companies" exact component={CompanyListComponent}/>
              <AuthenticatedRoute path = "/watchlist" exact component={WatchListComponent}/>
              <AuthenticatedRoute path = "/compareperformance" exact component={PerformanceComponent}/>
              <AuthenticatedRoute path = "/logout" exact component={LogoutComponent}/>
              <Route component={ErrorPage}/>
            </Switch>
            <FooterComponent></FooterComponent>
          </div>
        </Router>
      </div>
    );
}

export default App;
