import React,{Component} from 'react'
//import '../Stylesheets/Mystyle.css'
import AuthenticationService from './AuthenticationService.js'

class Login extends Component {

    constructor() {
        super();
        this.state = {
            username : "helloworld",
            upassword : '',
            hasloginfailed:false,
            showsuccess:false,
            emptyvalue:false
        }
    }

    handleClick = () => {
        if(this.state.username==="" || this.state.upassword===""){
            this.setState({
                emptyvalue:true
            })
        }
        if(this.state.username==="helloworld" && this.state.upassword==="helloworld") {
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.upassword)
            this.setState({hasloginfailed:false,showsuccess:true})
            this.props.history.push("/companies")
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
            <div className="container">
                <h1>Let's get started by</h1>
                <h1>login</h1>
                <br/>
                <div className="container">
                <div style={{color:"red"}}>field marked with * are mandatory</div>
                {this.state.emptyvalue && <div style={{color:"red"}}>
                    <ul>
                        <li>Email is required</li>
                        <li>Password is required</li>    
                    </ul>
                    </div>}
                {this.state.hasloginfailed && <div style={{color:"red"}}>Invalid credentials</div>}
                {/* {this.state.showsuccess && <div><h3>Login Successful</h3></div>style={{position:"absolute",left:"250px",top:"150px",padding:"20px"}}} */}
                <div className="form-group">
                    Email Address* <input type="text" className="form-control" name="username" value={this.state.username} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    Password* <input type="password" className="form-control" name="upassword" value={this.state.upassword} onChange={this.handleChange}/>
                </div>
                <button className="btn btn-primary btn-lg" onClick={this.handleClick}>Submit</button>
            </div>
            </div>
        )
    }
}

export default Login