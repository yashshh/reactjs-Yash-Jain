import './App.css';
import Login, { ErrorPage, WelcomePage } from './Components/Login'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todoapp</h1>
      </header>
      <Router>
        <div>
          <Switch>
            <Route path = "/" exact component={Login}/>
            <Route path = "/login" exact component={Login}/>
            <Route path = "/welcomepage" exact component={WelcomePage}/>
            <Route component={ErrorPage}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
