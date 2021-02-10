import React,{Component} from 'react';
import '../Stylesheets/MyStyle.css'

class CountPeople extends Component {
    constructor() {
        super();
        this.state={
            entrycount : 0,
            exitcount : 0,
            c:0            
        }
    }
    updateEntry = () => {
        this.setState((prevState,props)=> {
            return { entrycount : prevState.entrycount+1}
        }
        )
    }
    exitEntry = () => {
        this.setState((prevState,props)=> {
            return { exitcount : prevState.exitcount+1}
        }
        )

    }

    render() {
        return(
            <div style={{position:"absolute",left:"450px",top:"150px",padding:"20px"}}>
                <div>
                <button onClick={this.updateEntry}>Login</button>
                <span>{`${this.state.entrycount} people entered!!`}</span>
                
                <button onClick={this.exitEntry}>Exit</button>
                <span>{`${this.state.exitcount} people left!!`}</span>
                </div>
            </div>
        );
    }
}
export default CountPeople;