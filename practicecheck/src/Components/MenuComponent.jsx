import React,{Component} from 'react'
import '../Stylesheets/Mystyle.css'
import {BrowserRouter as Router,Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js';
import { withRouter } from 'react-router';

class MenuComponent extends Component {
    render() {
        let userLoggedin = AuthenticationService.isUserLoggedin()
        return(
            <header>
                    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                        <div>
                            <a href="https://www.google.com" className="navbar-brand">mStock App</a>
                        </div>
                        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav ml-auto">
                                <li><Link className="nav-link" to="/companies">Companies</Link></li>
                                {userLoggedin && <li><Link className="nav-link" to="/watchlist">WatchList</Link></li>}
                                {userLoggedin && <li><Link className="nav-link" to="/compareperformance">ComparePerformance</Link></li>}
                            </ul>
                            <ul className="navbar-nav ml-auto navbar-collapse justify-content-end">
                                {!userLoggedin && <li><Link className="nav-link" to="/login">Login</Link></li>}
                                {userLoggedin && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                            </ul>
                        </div>
                    </nav>
                </header>
        )
    }
}
export default withRouter(MenuComponent)