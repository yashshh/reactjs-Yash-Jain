import React,{Component} from 'react'
import '../Stylesheets/Mystyle.css'
import {BrowserRouter as Router,Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js';
import { withRouter } from 'react-router';

class HeaderComponent extends Component {
    render() {
        let userLoggedin = AuthenticationService.isUserLoggedin()
        return(
            <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="https://www.google.com" className="navbar-brand">TodoApp</a></div>
                        <ul className="navbar-nav">
                            {userLoggedin && <li><Link className="nav-link" to="/welcomepage/helloworld">Home</Link></li>}
                            {userLoggedin && <li><Link className="nav-link" to="/todolist">Todos</Link></li>}
                        </ul>
                        <ul className="navbar-nav navbar-collapse justify-content-end">
                            {!userLoggedin && <li><Link className="nav-link" to="/login">Login</Link></li>}
                            {userLoggedin && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                        </ul>
                    </nav>
                </header>
        )
    }
}
export default withRouter(HeaderComponent)