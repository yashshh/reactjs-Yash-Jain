import React,{Component} from 'react'
import '../Stylesheets/Mystyle.css'

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
            this.setState({hasloginfailed:false,showsuccess:true})
            this.props.history.push("/WelcomePage")
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
            <div style={{position:"absolute",left:"250px",top:"150px",padding:"20px"}}>
                {this.state.hasloginfailed && <div><h3>Invalid Username and Password</h3></div>}
                {this.state.showsuccess && <div><h3>Login Successful</h3></div>}
                Name : <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password : <input type="password" name="upassword" value={this.state.upassword} onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Login</button>
            </div>
        )
    }
}

export function WelcomePage() {
    return(
        <div>
            <h1>welcome to the todoapp</h1>
        </div>
    )
}

export function ErrorPage() {
    return(
        <div>
            <h1>come to the error page, please go back</h1>
        </div>
    )
}

export default Login