import React,{Component} from 'react'
import '../Stylesheets/Mystyle.css'
import AuthenticationService from './AuthenticationService.js'

class Login extends Component {

    constructor() {
        super();
        this.state = {
            username : "helloworld",
            upassword : '',
            hasloginfailed:false,
            showsuccess:false
        }
    }

    handleClick = () => {
        //let msg = this.state.username
        //alert(`${msg} welcome to the todoapp`)
        if(this.state.username==="helloworld" && this.state.upassword==="helloworld") {
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.upassword)
            this.setState({hasloginfailed:false,showsuccess:true})
            this.props.history.push({pathname:`/WelcomePage/${this.state.username}`,state:{haslogin:true}})
        }
        else {
            this.setState({hasloginfailed:true,showsuccess:false})
        }
        
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value,

        })
    }

    render() {
        return(
            <div>
                <h1>Login</h1>
                <div className="container">
                {this.state.hasloginfailed && <div className="alert alert-warning"><h3>Invalid credentials</h3></div>}
                {/* {this.state.showsuccess && <div><h3>Login Successful</h3></div>style={{position:"absolute",left:"250px",top:"150px",padding:"20px"}}} */}

                Name : <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password : <input type="password" name="upassword" value={this.state.upassword} onChange={this.handleChange}/>
                <button className="btn btn-success" onClick={this.handleClick}>Login</button>
            </div>
            </div>
        )
    }
}

export default Login