import React,{Component} from 'react'
import '../Stylesheets/Mystyle.css'

class FooterComponent extends Component {
    render() {
        return(
            <footer className="footer">
                <span className="text-muted">All rights reserved 2020 @TodoApp</span>                
            </footer>
        )
    }
}
export default FooterComponent