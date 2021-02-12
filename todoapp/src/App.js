import './App.css'
import Login from './Components/Login'
import ErrorPage from './Components/ErrorPage'
import WelcomePage from './Components/WelcomePage'
import LogoutComponent from './Components/LogoutComponent'
import ListTodosComponent from './Components/ListTodosComponent'
import HeaderComponent from './Components/HeaderComponent'
import FooterComponent from './Components/FooterComponent'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import AuthenticatedRoute from './Components/AuthenticatedRoute'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <HeaderComponent></HeaderComponent>
          <Switch>
            <Route path = "/" exact component={Login}/>
            <Route path = "/login" exact component={Login}/>
            <AuthenticatedRoute path = "/welcomepage/:name" exact component={WelcomePage}/>
            <AuthenticatedRoute path = "/todolist" exact component={ListTodosComponent}/>
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
